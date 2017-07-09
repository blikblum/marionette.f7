import Backbone from 'backbone'
import {View} from 'backbone.marionette'
import {pushPage} from 'marionette.f7'
import template from './template.html'

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
  }
})

export default PageView
