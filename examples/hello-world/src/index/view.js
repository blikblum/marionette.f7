import Backbone from 'backbone'
import {View} from 'backbone.marionette'
import {pushPage} from 'marionette.f7'
import template from './template.html'
import {Template7} from 'framework7'

function isNodeAttached (el) {
  return document.documentElement.contains(el)
}

let PageView = View.extend({
  className: 'page',
  template: Template7.compile(template),
  events: {
    'click .next-link': 'showNextPage'
  },
  showNextPage: function () {
    let nextView = new PageView({
      model: new Backbone.Model({
        level: this.model.get('level') + 1,
        message: 'Hello Again!'
      })
    })
    pushPage(nextView)
  },
  onBeforeAttach () {
    console.log('onBeforeAttach', this.cid, isNodeAttached(this.el))
  },
  onAttach () {
    console.log('onAttach', this.cid, isNodeAttached(this.el))
  },
  onBeforeDetach () {
    console.log('onBeforeDetach', this.cid, isNodeAttached(this.el))
  },
  onDetach () {
    console.log('onDetach', this.cid, isNodeAttached(this.el))
  },
  onRender () {
    console.log('onRender', this.cid)
  },
  onDestroy () {
    console.log('onDestroy', this.cid)
  }
})

export default PageView
