import _ from 'underscore'

const f7ViewMap = Object.create(null)
let f7App

function getF7ViewConfig (name) {
  if (!name) {
    name = f7App.getCurrentView(0).params.name
  }
  return f7ViewMap[name]
}

function getMnViewFromEvent (event) {
  let context = event.detail.page.context
  return context && context.__mn_view__
}

Dom7(document).on('page:beforeinit', function (e) {
  let view = getMnViewFromEvent(e)
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
  if (viewName && !linkEl.classList.contains('active')) {
    showView(viewName).then(function () {
      let $tabbar = Dom7(linkEl).closest('.tabbar')
      $tabbar.find('.tab-link.active').removeClass('active')
      linkEl.classList.add('active')
    })
  }
})

export function createApp ({options = {}, views = {}}) {
  let toRender = []
  f7App = new Framework7(_.extend(options, {init: false}))
  if (!views.main) views.main = '.view-main'
  Object.keys(views).forEach((viewName) => {
    let viewOptions = views[viewName]
    if (typeof viewOptions === 'string') viewOptions = {el: viewOptions}
    let f7View = f7App.addView(viewOptions.el, {
      name: viewName,
      dynamicNavbar: true,
      domCache: true
    })
    f7ViewMap[viewName] = {
      instance: f7View,
      options: viewOptions
    }
    if (viewOptions.preRender && viewOptions.rootPage) {
      toRender.push(_.result(viewOptions, 'rootPage'))
    }
  })

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
  let $pages = Dom7(view.pagesContainer).children('.page')
  $pages.each(function () {
    let data = this.f7PageData
    let mnView = data && data.context && data.context.__mn_view__
    if (mnView) mnView.destroy()
  })
}

export function pushPage (view, viewName, options = {}) {
  let f7ViewConfig = getF7ViewConfig(viewName)
  let f7View = f7ViewConfig.instance
  let loadPopup = f7View.pagesContainer.children.length === 0 && f7ViewConfig.options.popup
  let containerHTML
  if (loadPopup) {
    containerHTML = f7View.container.innerHTML
    options.animatePages = false
  }
  if (!view.isRendered()) {
    view.render()
  }
  view.triggerMethod('before:attach', view)
  view.el.dataset.page = _.uniqueId('mn-page-')
  f7View.router.load(Object.assign({}, options, {
    pageElement: view.el,
    context: {__mn_view__: view}
  })
  )
  if (loadPopup) {
    let $popup = Dom7(f7View.container).closest('.popup')
    $popup.once('popup:closed', function () {
      destroyPages(f7View)
      // manually reset the view using brute force
      let viewName = f7View.params.name
      f7View.container.innerHTML = containerHTML
      f7View.destroy()
      f7ViewConfig.instance = f7App.addView(f7ViewConfig.options.el, {
        name: viewName,
        dynamicNavbar: true,
        domCache: true
      })
    })
    f7App.popup($popup)
  }
}

export function popPage (viewName) {
  let f7View = getF7ViewConfig(viewName).instance
  f7View.router.back()
}

function popupCloseClick (e) {
  e.preventDefault()
  f7App.closeModal(this.el)
}

export function showPopup (view) {
  if (!view.isRendered()) {
    view.render()
  }
  let $el = Dom7(view.el)
  $el.addClass('popup')
  $el.once('popup:closed', view.destroy.bind(view))
  f7App.popup(view.el, true)
}

function updateActiveView (view) {
  let $views = Dom7(view.container).parent('.views')
  $views.children('.view.active').removeClass('active')
  view.container.classList.add('active')
}

export function showView (viewName) {
  let viewConfig = getF7ViewConfig(viewName)
  let view = viewConfig.instance
  if (!view.pagesContainer.children.length && viewConfig.options.rootPage) {
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
