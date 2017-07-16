import './setup'
import 'framework7'
import {configureApp, pushPage, showView} from 'marionette.f7'
import HomeView from './home/view'
import Tab2View from './tab2/view'

let f7App = new Framework7({
})

configureApp({
  app: f7App,

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

Dom7('.toolbar.tabbar a').on('click', function (e) {
  let linkEl = e.currentTarget
  if (!linkEl.classList.contains('active')) {
    showView(linkEl.dataset.view).then(function () {
      let $tabbar = Dom7(linkEl).closest('.tabbar')
      $tabbar.find('.tab-link.active').removeClass('active')
      linkEl.classList.add('active')
    })
  }
})
