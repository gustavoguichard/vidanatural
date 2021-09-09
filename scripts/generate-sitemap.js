import { writeFileSync } from 'fs'
import prettier from 'prettier'
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(async () => {
  await generate()
  process.exit(1)
})

global.fetch = require('node-fetch')

import api from '../lib/api'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: __dirname + '/../.env.local' })
}

const pages = {
  produtos: ['daily', 1.0],
  blog: ['daily', 0.9],
  'sobre-a-vida-natural': [],
  'onde-encontrar': ['monthly', 0.5],
  faq: [],
  'eu-uso-cosmetica-consciente': [],
  'entre-em-contato': ['monthly', 0.4],
  'termos-e-condicoes': ['monthly', 0.3],
}

function endpoint({ path, changefreq = 'daily', priority = '0.8', image }) {
  return `<url>
  <loc>${path}</loc>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
  ${
    image
      ? `<image:image>
          <image:loc>${image}</image:loc>
        </image:image>`
      : ''
  }
</url>
`
}

async function generate() {
  const prettierConfig = await prettier.resolveConfig(
    __dirname + '/../.prettierrc',
  )
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${endpoint({
    path: 'https://www.vidanatural.eco.br/',
    changefreq: 'daily',
    priority: '1.0',
  })}`

  try {
    const productsResponse = await api.vnda.fetchFromAPI('products')
    sitemap += productsResponse.data
      .map((product) =>
        endpoint({
          path: product.url,
          changefreq: 'daily',
          priority: '0.8',
          image: product.image_url.replace(/^(\/\/.+)/, 'https:$1'),
        }),
      )
      .join('')

    sitemap += Object.entries(pages)
      .map(([slug, [freq, pri]]) =>
        endpoint({
          path: `https://www.vidanatural.eco.br/${slug}`,
          changefreq: freq ?? 'daily',
          priority: pri ?? '0.6',
        }),
      )
      .join('')

    const posts = await api.cms.getByTypeAndTags('blog_post', {
      fetch: ['blog_post.uid', 'blog_post.header_image'],
    })
    sitemap += posts
      .map((item) =>
        endpoint({
          path: `https://www.vidanatural.eco.br/blog/${item.uid}`,
          changefreq: 'weekly',
          priority: '0.8',
          image: item.data?.header_image?.thumb?.url,
        }),
      )
      .join('')

    const testimonials = await api.cms.getByTypeAndTags('testimonial', {
      fetch: ['testimonial.picture', 'testimonial.uid'],
    })
    sitemap += testimonials
      .map((item) =>
        endpoint({
          path: `https://www.vidanatural.eco.br/eu-uso/${item.uid}`,
          changefreq: 'monthly',
          priority: '0.5',
          image: item.data?.picture?.url,
        }),
      )
      .join('')

    const faqItems = await api.cms.getByTypeAndTags('faq_item', {
      fetch: 'faq_item.uid',
    })
    sitemap += faqItems
      .map((item) =>
        endpoint({
          path: `https://www.vidanatural.eco.br/faq/${item.uid}`,
          changefreq: 'weekly',
          priority: '0.4',
        }),
      )
      .join('')

    const members = await api.cms.getByTypeAndTags('team_member', {
      fetch: ['team_member.picture', 'team_member.uid'],
    })
    sitemap += members
      .map((item) =>
        endpoint({
          path: `https://www.vidanatural.eco.br/equipe/${item.uid}`,
          changefreq: 'monthly',
          priority: '0.3',
          image: item.data?.picture?.url,
        }),
      )
      .join('')

    sitemap += members
      .map((item) =>
        endpoint({
          path: `https://www.vidanatural.eco.br/equipe/${item.uid}`,
          changefreq: 'monthly',
          priority: '0.3',
          image: item.data?.picture?.url,
        }),
      )
      .join('')
  } catch (err) {
    console.error(err)
  } finally {
    sitemap += '</urlset>'
    const formatted = prettier.format(sitemap, {
      ...prettierConfig,
      parser: 'html',
    })
    return writeFileSync(__dirname + '/../public/sitemap.xml', formatted)
  }
}
