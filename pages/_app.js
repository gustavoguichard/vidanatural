import { Fragment } from 'react'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import { ThemeProvider } from '@material-ui/styles'
import { initGA, logPageView } from 'utils/analytics'
import { CssBaseline } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import NProgress from 'next-nprogress/component'
import Providers from 'src/core/Providers'
import { isClient } from 'utils/helpers'
import SEO from 'utils/next-seo.config'
import theme from 'src/ui/theme'

import 'src/ui/app.scss'

class VidaNatural extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  async componentDidMount() {
    await this.polyfill()
    this.removeServerStyles()
    this.initGATracking()
  }

  async polyfill() {
    if (isClient && typeof window.IntersectionObserver === 'undefined') {
      await require('intersection-observer')
    }
  }

  initGATracking() {
    initGA()
    logPageView()
    Router.router.events.on('routeChangeComplete', logPageView)
  }

  removeServerStyles() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default VidaNatural
