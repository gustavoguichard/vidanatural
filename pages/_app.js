import React, { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { initTracking, intersectionPolyfill, removeServerStyles } from 'lib/fx'
import SEO from 'lib/next-seo.config'
import { useCoupon } from 'lib/domain-hooks'

import 'animate.css/animate.min.css'
import 'styles/app.scss'
import 'styles/tailwind.css'

const ClarityScript = dynamic(() => import('components/clarity-script'), {
  ssr: false,
})
const Pixel = dynamic(() => import('components/pixel'), { ssr: false })

const didMount = async (router) => {
  await intersectionPolyfill()
  await removeServerStyles()
  await initTracking(router)
}

const VidaNatural = ({ pageProps, Component }) => {
  const router = useRouter()
  useEffect(() => {
    router && didMount(router)
  }, [router])
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
      <Pixel />
      <ClarityScript />
      <Component {...pageProps} />
    </>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default VidaNatural
