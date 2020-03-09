import { SitemapStream, streamToPromise } from 'sitemap'
import products from 'data/products'

const pages = [
  'produtos',
  'sobre-a-vida-natural',
  'onde-encontrar',
  'eu-uso-cosmetica-consciente',
  'entre-em-contato',
  'termos-e-condicoes',
  'gratos',
  'entrar',
  'minha-conta',
]

const Sitemap = ({ xml }) => xml

Sitemap.getInitialProps = async ({ req, res }) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    })

    smStream.write({
      url: `/`,
      changefreq: 'daily',
      priority: 1.0,
    })

    products.forEach(product => {
      smStream.write({
        url: `/produtos/${product.slug}`,
        changefreq: 'daily',
        priority: 0.8,
        img: {
          url: `https://${req.headers.host}/static/images/products/${product.path}.png`,
        },
      })
    })

    pages.forEach(page => {
      smStream.write({
        url: `/${page}`,
        changefreq: 'weekly',
        priority: 0.6,
      })
    })

    // End sitemap stream
    smStream.end()

    // XML sitemap string
    const xml = (await streamToPromise(smStream)).toString()

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    // Display output to user
    res.end(xml)
    return { xml }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
    res.send(JSON.stringify(e))
    return { xml: null }
  }
}

export default Sitemap
