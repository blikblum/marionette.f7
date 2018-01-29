import {View} from 'backbone.marionette'
import {pushPage} from 'marionette.f7'
import template from './template.html'
import SingleView from '../single/view'
import {Template7} from 'framework7'

export default View.extend({
  template: Template7.compile(template),

  attributes: {
    id: 'tab2',
    class: 'page'
  },

  events: {
    'click .single-link': 'onSingleLinkClick'
  },

  onSingleLinkClick (e) {
    e.preventDefault()
    pushPage(new SingleView())
  }
})
