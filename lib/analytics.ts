import { init, track } from 'fbq'
import ReactGA from 'react-ga'
import TagManager from 'react-gtm-module'

const initGA = () => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID ?? '')
  TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? '' })
}

const initFB = () => {
  init(process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? '')
}

const initAnalytics = () => {
  initGA()
  initFB()
}

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  track('PageView')
}

const addToCart = (options: any) => {
  track('AddToCart', options)
}

export default {
  init: initAnalytics,
  pageView: logPageView,
  addToCart,
  track,
}
