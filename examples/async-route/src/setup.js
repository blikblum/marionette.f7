import './main.scss'
import {View} from 'backbone.marionette'

import 'framework7/dist/css/framework7.css'
import Framework7 from 'framework7'
import Popup from 'framework7/dist/components/popup/popup.js'
import Preloader from 'framework7/dist/components/preloader/preloader.js'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
}

Framework7.use([Popup, Preloader])
