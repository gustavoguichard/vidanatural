import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import NProgress from 'next-nprogress/component'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import { initGA, logPageView } from 'lib/analytics'
import { isClient } from 'lib/utils'
import SEO from 'lib/next-seo.config'
import theme from 'lib/theme'

import 'styles/app.scss'

const didMount = async () => {
  if (isClient && typeof window.IntersectionObserver === 'undefined') {
    await require('intersection-observer')
  }

  // Remove Server Styles
  const jssStyles = document.querySelector('#jss-server-side')
  if (jssStyles) {
    jssStyles.parentElement.removeChild(jssStyles)
  }

  // initGATraking
  initGA()
  logPageView()
  Router.router.events.on('routeChangeComplete', logPageView)
}

const VidaNatural = ({ pageProps, Component }) => {
  useEffect(() => {
    didMount()
  }, [])

  return (
    <>
      <NProgress color={theme.palette.secondary.main} />
      <DefaultSeo {...SEO} />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default VidaNatural
