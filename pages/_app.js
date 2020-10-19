import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import {
  initTracking,
  intersectionPolyfill,
  removeServerStyles,
  registerCoupon,
} from 'lib/fx'
import SEO from 'lib/next-seo.config'

import 'animate.css/animate.min.css'
import 'styles/app.scss'
import 'styles/tailwind.css'

const Pixel = dynamic(() => import('components/pixel'), { ssr: false })

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
      <Component {...pageProps} />
    </>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default VidaNatural
