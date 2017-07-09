import {CollectionView} from 'backbone.marionette'

export default class PageStack {
  constructor (f7View) {
    this.pageViews = new CollectionView({
      el: f7View.pagesContainer
    })
    this.f7View = f7View
  }

  push (view) {
    this.pageViews.addChildView(view)
    this.f7View.router.load({
      pageElement: view.el,
      context: {
        view,
        stack: this
      }
    })
  }

  pop () {
    this.f7View.router.back()
  }

  remove (view) {
    this.pageViews.removeChildView(view)
  }
}
