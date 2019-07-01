import { register, unregister } from 'next-offline/runtime'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { ThemeProvider } from '@material-ui/styles'
import { initGA, logPageView } from 'utils/analytics'
import { CssBaseline } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import NProgress from 'next-nprogress/component'
import Providers from 'src/core/Providers'
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

  componentDidMount() {
    this.removeServerStyles()
    process.browser && register()
    this.initGATracking()
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

  componentWillMount() {
    if (process.browser) {
      unregister()
    }
  }

  render() {
    const { Component, pageProps } = this.props
    const title = 'Vida Natural | Cosmética Consciente'
    return (
      <Container>
        <NProgress color={theme.palette.secondary.main} />
        <Head>
          <title>{title}</title>
        </Head>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Providers>
              <Component {...pageProps} />
            </Providers>
          </ThemeProvider>
        </StylesProvider>
      </Container>
    )
  }
}

export default VidaNatural
