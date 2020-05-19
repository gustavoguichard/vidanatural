import ReactGA from 'react-ga'
import TagManager from 'react-gtm-module'

export const initGA = () => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID)
  TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID })
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
