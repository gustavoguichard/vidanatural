import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import Script from 'next/script'

import { useTracking, intersectionPolyfill } from 'lib/fx'
import SEO from 'lib/next-seo.config'
import { useCoupon, useInitialBanner } from 'lib/domain-hooks'

import 'styles/app.css'

const VidaNatural = ({ pageProps, Component }) => {
  useEffect(() => {
    intersectionPolyfill()
  }, [])
  useTracking()
  useInitialBanner()
  useCoupon()

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_TOKEN}");`,
          }}
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export function reportWebVitals(metric) {
  console.log(metric) // eslint-disable-line
}

export default VidaNatural
