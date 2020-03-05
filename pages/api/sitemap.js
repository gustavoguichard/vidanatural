import { SitemapStream, streamToPromise } from 'sitemap'
import products from 'data/products'

const fs = require('fs')
const path = require('path')

export default async (req, res) => {
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
      priority: 0.9,
    })

    pages
      .filter(page => {
        return !page.name.startsWith('_') && page.isFile()
      })
      .forEach(page => {
        const [name] = page.name.split('.')
        smStream.write({
          url: `/${name}`,
          changefreq: 'weekly',
          priority: 0.7,
        })
      })

    products.forEach(product => {
      smStream.write({
        url: `/produtos/${product.slug}`,
        changefreq: 'daily',
        priority: 0.9,
      })
    })

    // End sitemap stream
    smStream.end()

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString()

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    // Display output to user
    res.end(sitemapOutput)
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
    res.send(JSON.stringify(e))
  }
}
