import 'framework7/css/framework7.css'
import './main.scss'
import Framework7 from 'framework7'
import Popup from 'framework7/components/popup/popup.js'
import Preloader from 'framework7/components/preloader/preloader.js'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
}

Framework7.use([Popup, Preloader])
