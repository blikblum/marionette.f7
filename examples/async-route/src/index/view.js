import Backbone from 'backbone'
import {View, isNodeAttached} from 'backbone.marionette'
import template from './template.html'
import {Template7} from 'framework7'

let PageView = View.extend({
  className: 'page',
  template: Template7.compile(template),
  templateContext () {
    return {
      nextLevel: this.model.get('level') + 1
    }
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
