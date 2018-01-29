import {View} from 'backbone.marionette'
import template from './template.html'
import {Template7} from 'framework7'

export default View.extend({
  template: Template7.compile(template),

  attributes: {
    id: 'register',
    class: 'page'
  }
})
