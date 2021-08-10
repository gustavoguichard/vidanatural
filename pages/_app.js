import React, { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { initTracking, intersectionPolyfill } from 'lib/fx'
import SEO from 'lib/next-seo.config'
import { useCoupon, useInitialBanner } from 'lib/domain-hooks'

import 'styles/app.css'

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
        <script
          defer
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
          }}
        />
        <script
          defer
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-332779573/eJS0CJ-GwdkCELWg154B', 'value': 1.0, 'currency': 'BRL', 'event_callback': callback }); return false; }`,
          }}
        />
        <script
          defer
          type="text/javascript"
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
