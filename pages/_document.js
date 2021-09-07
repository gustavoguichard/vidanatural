import Document, { Html, Head, Main, NextScript } from 'next/document'
import NoScript from 'components/no-script'

class VidaNatural extends Document {
  render() {
    return (
      <Html className="max-w-screen" lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#32333d" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.png"
          />
          <link rel="icon" sizes="192x192" href="/static/icon.png" />
          <link rel="apple-touch-icon" href="/static/icon.png" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Blog da Vida Natural"
            href="https://vidanatural.eco.br/blog/feed/"
          />
          <link
            rel="sitemap"
            type="application/xml"
            title="Sitemap"
            href="/sitemap.xml"
          />
        </Head>
        <body className="bg-gray-50 max-w-screen">
          <noscript>
            <iframe
              title="tagmanager"
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <NoScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default VidaNatural
