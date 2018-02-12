import {mnRouteMap, routerChannel, viewRoutesMap} from './globals'
import {View} from 'backbone.marionette'
import Route from './route'

function resolveComponent (router, RouteClass, to, from, resolve, reject) {
  let viewRoutes
  const transition = {
    to,
    from,
    cancel () {
      this.isCancelled = true
    }
  }
  const previousMnRoute = mnRouteMap.get(from)
  if (previousMnRoute) {
    routerChannel.trigger('before:deactivate', transition, previousMnRoute)
    if (!transition.isCancelled) {
      previousMnRoute.deactivate(transition)
      routerChannel.trigger('deactivate', transition, previousMnRoute)
    }
    if (transition.isCancelled) {
      reject()
      return
    }
  }
  const mnRoute = new RouteClass(RouteClass.options || {})
  mnRoute.$router = router
  routerChannel.trigger('before:activate', transition, mnRoute)
  if (transition.isCancelled) {
    reject()
    return
  }
  Promise.resolve(mnRoute.activate(transition))
    .then(function () {
      if (transition.isCancelled) {
        reject()
      } else {
        routerChannel.trigger('activate', transition, mnRoute)
        if (transition.isCancelled) {
          reject()
          return
        }
        mnRouteMap.set(to, mnRoute)
        viewRoutes = viewRoutesMap.get(mnRoute.$router)
        if (!viewRoutes) {
          viewRoutes = []
          viewRoutesMap.set(mnRoute.$router, viewRoutes)
        }
        viewRoutes.push(mnRoute)
        resolve({component: {
          $mnRoute: mnRoute,
          beforeMount () {
            const view = this.$options.$mnRoute.view
            if (view) view.triggerMethod('before:attach', view)
          },
          mounted () {
            const view = this.$options.$mnRoute.view
            if (view) view.triggerMethod('attach', view)
          },
          beforeDestroy () {
            const view = this.$options.$mnRoute.view
            if (view) view.triggerMethod('before:detach', view)
          },
          destroyed () {
            const mnRoute = this.$options.$mnRoute
            router.once('routeChanged', function () {
              const view = mnRoute.view
              if (view) view.triggerMethod('detach', view)
              mnRoute.destroy()
            })
            const activeRoutes = viewRoutesMap.get(mnRoute.$router)
            if (activeRoutes) {
              const routeIndex = activeRoutes.indexOf(mnRoute)
              if (routeIndex !== -1) activeRoutes.splice(routeIndex, 1)
            }
          },
          render () {
            const mnRoute = this.$options.$mnRoute
            mnRoute.renderView(transition)
            return mnRoute.view.el
          }
        }
        })
        routerChannel.trigger('transition', transition)
      }
    })
    .catch(function (err) {
      routerChannel.trigger('transition:error', transition, err)
      reject()
    })
}

export default function asyncRoute (routeConfig) {
  if (!(routeConfig.prototype instanceof Route)) {
    if (routeConfig.prototype instanceof View) {
      routeConfig = Route.extend({
        viewClass: routeConfig
      })
    } else {
      routeConfig = Route.extend({}, {
        options: routeConfig
      })
    }
  }
  return function (to, from, resolve, reject) {
    return resolveComponent(this, routeConfig, to, from, resolve, reject)
  }
}
