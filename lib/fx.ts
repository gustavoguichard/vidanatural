import { NextRouter } from 'next/router'

import api from 'lib/api'
import { initGA, logPageView } from 'lib/analytics'
import { isClient } from 'lib/utils'

export const intersectionPolyfill = async () => {
  if (isClient && typeof window.IntersectionObserver === 'undefined') {
    await require('intersection-observer')
  }
}

export const removeServerStyles = async () => {
  const jssStyles = document.querySelector('#jss-server-side')
  jssStyles?.parentElement?.removeChild(jssStyles)
}

export const initTracking = async (router: NextRouter) => {
  initGA()
  logPageView()
  router?.events.on('routeChangeComplete', logPageView)
}
