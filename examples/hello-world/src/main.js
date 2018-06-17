import './setup'
import Backbone from 'backbone'
import 'framework7'
import {createApp, pushPage} from 'marionette.f7'
import PageView from './index/view'

createApp({
  options: {
    material: true
  }
}).then(function () {
  const pageView = new PageView({
    model: new Backbone.Model({
      level: 0,
      message: 'Hello World!'
    })
  })

  pushPage(pageView)
}).catch(err => console.log('Error creating app:', err))
