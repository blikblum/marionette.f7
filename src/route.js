import _ from 'underscore'
import Radio from 'backbone.radio'
import { Object as MnObject, bindEvents, View } from 'backbone.marionette'
import RouteContext from './routecontext'

export default MnObject.extend(
  {
    constructor (options) {
      this.mergeOptions(options, ['viewClass', 'viewOptions'])
      MnObject.call(this, options)
      this._bindContext()
    },

    cidPrefix: 'rou',

    activate () {

    },

    deactivate () {

    },

    renderView (transition) {
      if (this.view && this.updateView(transition)) return
      let ViewClass = this.viewClass || View
      let viewOptions = _.result(this, 'viewOptions', {})
      if (!(ViewClass.prototype instanceof View)) {
        if (_.isFunction(ViewClass)) {
          ViewClass = ViewClass.call(this)
        }
        if (!(ViewClass.prototype instanceof View)) {
          viewOptions = _.extend({}, ViewClass, viewOptions)
          ViewClass = View
        }
      }
      let view = new ViewClass(viewOptions)
      this.listenToOnce(view, 'destroy', function () {
        if (this.view) {
          this.view.destroy()
          this.view = void 0
        }
      })
      this.view = view
      // routerChannel.trigger('route:render', this)
      if (this.viewEvents) {
        bindEvents(this, view, this.viewEvents)
      }
    },

    updateView () {

    },

    getContext () {
      // todo: cache context??
      return new RouteContext(this.$router, this)
    },

    _bindContext () {
      const requests = _.result(this, 'contextRequests')
      const events = _.result(this, 'contextEvents')
      let channel
      if (!requests && !events) {
        return
      }

      this._contextChannel = channel = new Radio.Channel('__routeContext_' + this.cid)

      this.bindRequests(channel, requests)
      this.bindEvents(channel, events)
    },

    $router: null
  }
)
