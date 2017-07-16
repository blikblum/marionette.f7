import {View} from 'backbone.marionette'
import template from './template.html'

export default View.extend({
  template: Template7.compile(template),

  attributes: {
    id: 'register',
    class: 'page'
  }
})
