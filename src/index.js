import PageStack from './pageStack'

const pageStackMap = {}
let f7App

export function configureApp ({app, views = {}}) {
  f7App = app
  views.main = '.view-main'
  Object.keys(views).forEach((viewName) => {
    let f7View = app.addView(views[viewName], {
      name: viewName,
      domCache: true
    })
    pageStackMap[viewName] = new PageStack(f7View)
  })
}

function getStack (target) {
  if (!target) {
    target = f7App.getCurrentView(0).params.name
  }
  return pageStackMap[target]
}

export function pushPage (view, target) {
  let stack = getStack(target)
  stack.push(view)
}

export function popPage (target) {
  let stack = getStack(target)
  stack.pop()
}

Dom7(document).on('page:afterback', function (e) {
  let context = e.detail.page.context
  let stack = context && context.stack
  if (stack) {
    stack.remove(context.view)
  }
})
