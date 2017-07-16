import {View} from 'backbone.marionette'
import {pushPage, showPopup} from 'marionette.f7'
import template from './template.html'
import SingleView from '../single/view'
import PopupView from '../popup/view'
import LoginView from '../login/view'

export default View.extend({
  template: Template7.compile(template),

  events: {
    'click .popup-link': 'onPopupLinkClick',
    'click .login-link': 'onLoginLinkClick',
    'click .single-link': 'onSingleLinkClick'
  },

  onLoginLinkClick (e) {
    e.preventDefault()
    pushPage(new LoginView(), 'login')
  },

  onSingleLinkClick (e) {
    e.preventDefault()
    pushPage(new SingleView())
  },

  onPopupLinkClick (e) {
    e.preventDefault()
    showPopup(new PopupView())
  }
})
