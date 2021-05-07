import React, { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { initTracking, intersectionPolyfill } from 'lib/fx'
import SEO from 'lib/next-seo.config'
import { useCoupon, useInitialBanner } from 'lib/domain-hooks'

import 'styles/app.scss'

const didMount = async (router) => {
  await intersectionPolyfill()
  await initTracking(router)
}

const VidaNatural = ({ pageProps, Component }) => {
  const router = useRouter()
  useEffect(() => {
    router && didMount(router)
  }, [router])
  useInitialBanner()
  useCoupon()

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default VidaNatural
