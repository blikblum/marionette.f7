import './setup'
import {createApp} from 'marionette.f7'
import HomeView from './home/view'
import Tab2View from './tab2/view'

createApp({
  options: {
    theme: 'ios'
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
