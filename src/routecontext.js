import {viewRoutesMap} from './globals'

function RouteContext (router, route) {
  const routes = viewRoutesMap.get(router)
  this.parentRoutes = routes ? routes.slice(0, routes.indexOf(route)) : []
}

RouteContext.prototype.trigger = function () {
  let parentRoutes = this.parentRoutes
  for (let i = parentRoutes.length - 1; i >= 0; i--) {
    let channel = parentRoutes[i]._contextChannel
    if (channel) {
      channel.trigger.apply(channel, arguments)
    }
  }
}

RouteContext.prototype.request = function (name) {
  let parentRoutes = this.parentRoutes
  for (let i = parentRoutes.length - 1; i >= 0; i--) {
    let channel = parentRoutes[i]._contextChannel
    if (channel && channel._requests[name]) {
      return channel.request.apply(channel, arguments)
    }
  }
}

export default RouteContext
