import './setup'
import Framework7 from 'framework7'
import Radio from 'backbone.radio'
import {asyncRoute} from 'marionette.f7'
import PageRoute from './index/route'

const app = new Framework7({
  theme: 'md',
  routes: [
    {
      path: '/my-page/level/:level',
      async: asyncRoute(PageRoute)
    }
  ]
})

app.views.create('.view-main', {
  stackPages: true,
  url: '/my-page/level/0'
})

Radio.channel('router').on('before:activate', function (transition) {
  // show preloader after a 500 ms delay
  transition.showPreloader(500)
})
