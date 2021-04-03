import { NextRouter } from 'next/router'

import analytics from 'lib/analytics'
import { isClient } from 'lib/utils'

export const intersectionPolyfill = async () => {
  if (isClient && typeof window.IntersectionObserver === 'undefined') {
    await require('intersection-observer')
  }
}

export const initTracking = async (router: NextRouter) => {
  analytics.init()
  analytics.pageView()
  router?.events.on('routeChangeComplete', analytics.pageView)
}
