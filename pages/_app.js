import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import {
  initTracking,
  intersectionPolyfill,
  removeServerStyles,
  registerCoupon,
} from 'lib/fx'
import SEO from 'lib/next-seo.config'
import theme from 'lib/theme'

import Pixel from 'components/pixel'

import 'animate.css/animate.min.css'
import 'styles/app.scss'
import 'styles/tailwind.css'

const didMount = async (router) => {
  await intersectionPolyfill()
  await removeServerStyles()
  await initTracking(router)
  await registerCoupon(router)
}

const VidaNatural = ({ pageProps, Component }) => {
  const router = useRouter()
  useEffect(() => {
    router && didMount(router)
  }, [router])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Pixel />
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
