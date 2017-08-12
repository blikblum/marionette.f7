import './setup'
import 'framework7'
import {createApp, showView} from 'marionette.f7'
import HomeView from './home/view'
import Tab2View from './tab2/view'

createApp({
  options: {
    material: false
  },

  views: {
    main: {
      el: '.view-main',
      preRender: true,
      rootPage: new HomeView({
        el: '#home'
      })
    },
    secondtab: {
      el: '.view-tab2',
      rootPage: function () {
        return new Tab2View()
      }
    },
    login: {
      el: '.view-login',
      popup: true
    }
  }
})
