import './setup'
import Backbone from 'backbone'
import 'framework7'
import {configureApp, pushPage} from 'marionette.f7'
import PageView from './index/view'

let f7App = new Framework7({
  material: true
})

configureApp({
  app: f7App
})

let pageView = new PageView({
  model: new Backbone.Model({
    level: 0,
    message: 'Hello World!'
  })
})

pushPage(pageView)
