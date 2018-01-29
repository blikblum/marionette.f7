import {View} from 'backbone.marionette'
import {pushPage} from 'marionette.f7'
import template from './template.html'
import RegisterView from '../register/view'
import {Template7} from 'framework7'

export default View.extend({
  template: Template7.compile(template),

  attributes: {
    id: 'login',
    class: 'page'
  },

  events: {
    'click .register-link': function (e) {
      e.preventDefault()
      pushPage(new RegisterView())
    }
  }
})
