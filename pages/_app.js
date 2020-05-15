import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { initGA, logPageView } from 'utils/analytics'
import { CssBaseline } from '@material-ui/core'
import NProgress from 'next-nprogress/component'
import Providers from 'src/core/Providers'
import { isClient } from 'utils/helpers'
import SEO from 'utils/next-seo.config'
import theme from 'src/ui/theme'

import 'src/ui/app.scss'

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
          <Providers>
            <Component {...pageProps} />
          </Providers>
        </ThemeProvider>
      </StylesProvider>
    </>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default VidaNatural
