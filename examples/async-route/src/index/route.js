import Backbone from 'backbone'
import {Route} from 'marionette.f7'
import View from './view'

export default Route.extend({
  activate (transition) {
    this.level = +transition.to.params.level
  },

  viewOptions () {
    return {
      model: new Backbone.Model({
        level: this.level,
        message: this.level ? 'Hello Again' : 'Hello World!'
      })
    }
  },

  viewClass: View
})
