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

const initAnalytics = (): void => {
  initGA()
  initFB()
}

const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  track('PageView')
}

const addToCart = (options: Record<string, unknown>): void => {
  track('AddToCart', options)
}

export const useTrack = (
  event: TrackType,
  options?: Record<string, unknown>,
  shouldTrack = true,
): void => {
  useEffect(() => {
    if (shouldTrack) track(event, options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldTrack])
}

const analytics = {
  init: initAnalytics,
  pageView: logPageView,
  addToCart,
  track,
}

export default analytics
