import _ from 'underscore'
import Framework7, {Dom7} from 'framework7'
import Route from './route'
import asyncRoute from './asyncroute'

const f7ViewMap = Object.create(null)
let f7App

function getF7ViewConfig (name) {
  if (!name) {
    name = f7App.views.current.params.name
  }
  return f7ViewMap[name]
}

function getF7ViewPages (view) {
  return view.$el.find('.page')
}

function getMnViewFromEvent (event) {
  let f7Route = event.detail.route
  return f7Route && f7Route.route && f7Route.route.__mn_view__
}

function registerEvents () {
  Dom7(document).on('page:beforeinit', function (e) {
    const view = getMnViewFromEvent(e)
    if (view) {
      view._isAttached = true
      view.triggerMethod('attach', view)
    }
  })

  Dom7(document).on('page:beforeremove', function (e) {
    let view = getMnViewFromEvent(e)
    if (view) {
      view.destroy()
    }
  })

  Dom7(document).on('click', '.toolbar.tabbar a', function () {
    let linkEl = this
    let viewName = linkEl.dataset.view
    if (viewName && !linkEl.classList.contains('tab-link-active')) {
      showView(viewName).then(function () {
        let $tabbar = Dom7(linkEl).closest('.tabbar')
        $tabbar.find('.tab-link.tab-link-active').removeClass('tab-link-active')
        linkEl.classList.add('tab-link-active')
      })
    }
  })
}

export function createApp ({options = {}, views = {}}) {
  let toRender = []
  f7App = new Framework7(_.extend(options, {init: false}))
  if (!views.main) views.main = '.view-main'
  Object.keys(views).forEach((viewName) => {
    let viewOptions = views[viewName]
    if (typeof viewOptions === 'string') viewOptions = {el: viewOptions}
    let f7View = f7App.views.create(viewOptions.el, {
      name: viewName,
      stackPages: true
    })
    f7ViewMap[viewName] = {
      instance: f7View,
      options: viewOptions
    }
    if (viewOptions.preRender && viewOptions.rootPage) {
      toRender.push(_.result(viewOptions, 'rootPage'))
    }
  })

  registerEvents()

  return Promise.all(toRender).then(function (views) {
    views.forEach(function (view) {
      view.render()
    })
  }).then(function () {
    // after all pre-rendering is done, init the f7 app
    f7App.init()
    return f7App
  })
}

function destroyPages (view) {
  const $pages = Dom7(view.el).children('.page')
  $pages.each(function () {
    const page = this.f7Page
    const mnView = page && page.route && page.route.route && page.route.route.__mn_view__
    if (mnView) mnView.destroy()
  })
}

export function pushPage (view, viewName, options = {}) {
  const f7ViewConfig = getF7ViewConfig(viewName)
  const f7View = f7ViewConfig.instance
  const loadPopup = f7ViewConfig.options.popup && !getF7ViewPages(f7View).length
  let containerHTML
  options = Object.assign({}, options, {route: {route: {__mn_view__: view}}})
  if (loadPopup) {
    containerHTML = f7View.el.innerHTML
    options.animate = false
  }
  if (!view.isRendered()) {
    view.render()
  }
  view.triggerMethod('before:attach', view)
  view.el.dataset.name = _.uniqueId('mn-page-')
  f7View.router.load({el: view.el}, options)
  if (loadPopup) {
    let $popup = Dom7(f7View.el).closest('.popup')
    $popup.once('popup:closed', function () {
      destroyPages(f7View)
      // manually reset the view using brute force
      let viewName = f7View.params.name
      f7View.el.innerHTML = containerHTML
      f7View.destroy()
      f7ViewConfig.instance = f7App.views.create(f7ViewConfig.options.el, {
        name: viewName,
        stackPages: true
      })
    })
    f7App.popup.open($popup)
  }
}

export function popPage (viewName) {
  let f7View = getF7ViewConfig(viewName).instance
  f7View.router.back()
}

export function showPopup (view) {
  if (!view.isRendered()) {
    view.render()
  }
  let $el = Dom7(view.el)
  $el.addClass('popup')
  $el.once('popup:closed', view.destroy.bind(view))
  f7App.popup.open(view.el, true)
}

function updateActiveView (view) {
  const $views = Dom7(view.el).parent('.views')
  if (!$views.length) return
  $views.children('.view.tab-active').removeClass('tab-active')
  view.el.classList.add('tab-active')
}

export function showView (viewName) {
  let viewConfig = getF7ViewConfig(viewName)
  let view = viewConfig.instance
  if (viewConfig.options.rootPage && !getF7ViewPages(view).length) {
    let rootPage = _.result(viewConfig.options, 'rootPage')
    return Promise.resolve(rootPage).then(function (pageView) {
      pushPage(pageView, viewName, {animatePages: false})
      updateActiveView(view)
    })
  } else {
    updateActiveView(view)
    return Promise.resolve()
  }
}

export {Route, asyncRoute}
