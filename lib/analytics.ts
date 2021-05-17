import { init, track } from 'fbq'
import { useEffect } from 'react'
import ReactGA from 'react-ga'
import TagManager from 'react-gtm-module'

type TrackType =
  | 'AddPaymentInfo'
  | 'AddToCart'
  | 'CompleteRegistration'
  | 'Contact'
  | 'FindLocation'
  | 'InitiateCheckout'
  | 'Lead'
  | 'Purchase'
  | 'Search'
  | 'ViewContent'
  | 'PageView'

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

const addToCart = (options: Record<string, unknown>) => {
  track('AddToCart', options)
}

export const useTrack = (
  event: TrackType,
  options?: Record<string, unknown>,
  shouldTrack = true,
) => {
  useEffect(() => {
    shouldTrack && track(event, options)
  }, [shouldTrack])
}

export default {
  init: initAnalytics,
  pageView: logPageView,
  addToCart,
  track,
}
