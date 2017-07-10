const f7ViewMap = Object.create(null)
let f7App

export function configureApp ({app, views = {}}) {
  f7App = app
  views.main = '.view-main'
  Object.keys(views).forEach((viewName) => {
    f7ViewMap[viewName] = app.addView(views[viewName], {
      name: viewName,
      domCache: true
    })
  })
}

function getF7View (target) {
  if (!target) {
    target = f7App.getCurrentView(0).params.name
  }
  return f7ViewMap[target]
}

export function pushPage (view, target) {
  let f7View = getF7View(target)
  if (!view.isRendered()) {
    view.render()
  }
  view.triggerMethod('before:attach', view)
  f7View.router.load({
    pageElement: view.el,
    context: {
      view
    }
  })
}

export function popPage (target) {
  let f7View = getF7View(target)
  f7View.router.back()
}

Dom7(document).on('page:beforeinit', function (e) {
  let context = e.detail.page.context
  let view = context && context.view
  if (view) {
    view._isAttached = true
    view.triggerMethod('attach', view)
  }
})

Dom7(document).on('page:beforeremove', function (e) {
  let context = e.detail.page.context
  let view = context && context.view
  if (view) {
    view.destroy()
  }
})
