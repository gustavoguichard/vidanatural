import analytics from 'lib/analytics'

import type { NextRouter } from 'next/router'

export const initTracking = async (router: NextRouter) => {
  analytics.init()
  analytics.pageView()
  router?.events.on('routeChangeComplete', analytics.pageView)
}
