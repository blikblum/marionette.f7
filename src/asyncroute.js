import {mnRouteMap, routerChannel, viewRoutesMap} from './globals'
import {View} from 'backbone.marionette'
import Route from './route'

function createComponent (router, mnRoute, transition) {
  return {
    beforeMount () {
      const view = mnRoute.view
      if (view) view.triggerMethod('before:attach', view)
    },
    mounted () {
      const view = mnRoute.view
      if (view) view.triggerMethod('attach', view)
    },
    destroyed () {
      const view = mnRoute.view
      if (view) view.triggerMethod('before:detach', view)
      router.once('routeChanged', function () {
        if (view) view.triggerMethod('detach', view)
        mnRoute.destroy()
      })
      const activeRoutes = viewRoutesMap.get(router)
      if (activeRoutes) {
        const routeIndex = activeRoutes.indexOf(mnRoute)
        if (routeIndex !== -1) activeRoutes.splice(routeIndex, 1)
      }
    },
    render () {
      mnRoute.renderView(transition)
      return mnRoute.view.el
    }
  }
}

function resolveComponent (router, RouteClass, to, from, resolve, reject) {
  let viewRoutes
  const transition = {
    to,
    from,
    cancel () {
      this.isCancelled = true
    },
    redirect (...args) {
      this.isCancelled = true
      reject()
      router.navigate(...args)
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
    mnRoute.destroy()
    reject()
    return
  }
  Promise.resolve(mnRoute.activate(transition))
    .then(function () {
      if (transition.isCancelled) {
        mnRoute.destroy()
        reject()
      } else {
        routerChannel.trigger('activate', transition, mnRoute)
        if (transition.isCancelled) {
          mnRoute.destroy()
          reject()
          return
        }
        mnRouteMap.set(to, mnRoute)
        viewRoutes = viewRoutesMap.get(router)
        if (!viewRoutes) {
          viewRoutes = []
          viewRoutesMap.set(router, viewRoutes)
        }
        viewRoutes.push(mnRoute)
        resolve({component: createComponent(router, mnRoute, transition)})
        routerChannel.trigger('transition', transition)
      }
    })
    .catch(function (err) {
      routerChannel.trigger('transition:error', transition, err)
      mnRoute.destroy()
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
