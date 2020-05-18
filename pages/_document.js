import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import theme from 'src/ui/theme'

class VidaNatural extends Document {
  render() {
    return (
      <html amp="" lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
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
        </Head>
        <body>
          <Main />
          <NextScript />
          <link
            async
            href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
            rel="stylesheet"
          />
        </body>
      </html>
    )
  }
}

VidaNatural.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </>
    ),
  }
}

export default VidaNatural
