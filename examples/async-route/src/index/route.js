import Backbone from 'backbone'
import {Route} from 'marionette.f7'
import View from './view'

export default Route.extend({
  activate (transition) {
    this.level = +transition.to.params.level
    if ((this.level % 2) !== 0) {
      transition.redirect(`/my-page/level/${this.level + 1}`)
    }
    return new Promise((resolve) => {
      setTimeout(resolve, this.level * 100)
    })
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
