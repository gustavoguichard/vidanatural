import Document, { Html, Head, Main, NextScript } from 'next/document'

class VidaNatural extends Document {
  render() {
    return (
      <Html amp="" lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#32333d" />
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
        <body className="bg-gray-100">
          <Main />
          <NextScript />
          <link
            async
            href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
            rel="stylesheet"
          />
        </body>
      </Html>
    )
  }
}

export default VidaNatural
