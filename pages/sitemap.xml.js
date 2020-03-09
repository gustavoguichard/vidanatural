import { SitemapStream, streamToPromise } from 'sitemap'
import products from 'data/products'

const fs = require('fs')
const path = require('path')

const Sitemap = ({ xml }) => xml

Sitemap.getInitialProps = async ({ req, res }) => {
  try {
    const directoryPath = path.join('./pages')
    const pages = await fs.readdirSync(directoryPath, { withFileTypes: true })

    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    })

    smStream.write({
      url: `/`,
      changefreq: 'daily',
      priority: 1.0,
    })

    pages
      .filter(page => {
        return (
          !page.name.startsWith('_') &&
          !page.name.endsWith('.xml.js') &&
          page.isFile()
        )
      })
      .forEach(page => {
        const [name] = page.name.split('.')
        smStream.write({
          url: `/${name}`,
          changefreq: 'weekly',
          priority: 0.6,
        })
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
