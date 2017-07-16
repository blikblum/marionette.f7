import {View} from 'backbone.marionette'
import {pushPage} from 'marionette.f7'
import template from './template.html'
import SecondLevelView from '../secondlevel/view'

export default View.extend({
  template: Template7.compile(template),

  attributes: {
    id: 'single',
    class: 'page'
  },

  events: {
    'click .second-link': function (e) {
      e.preventDefault()
      pushPage(new SecondLevelView())
    }
  }
})
