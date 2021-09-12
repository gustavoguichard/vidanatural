import { writeFileSync } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(async () => {
  await generate()
  process.exit(0)
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
  faq: [],
  'eu-uso-cosmetica-consciente': [],
  'entre-em-contato': ['monthly', 0.4],
  'termos-e-condicoes': ['monthly', 0.3],
}

async function generate() {
  const smStream = new SitemapStream({
    hostname: `https://${process.env.NEXT_PUBLIC_API_DOMAIN}/`,
    cacheTime: 600000,
  })
  smStream.write({
    url: `/`,
    changefreq: 'daily',
    priority: 1.0,
  })

  try {
    const productsResponse = await api.vnda.fetchFromAPI('products')
    productsResponse.data.forEach((product) => {
      smStream.write({
        url: product.url,
        changefreq: 'daily',
        priority: 0.8,
        img: {
          url: product.image_url,
        },
      })
    })

    Object.entries(pages).forEach(([slug, [freq, priority]]) => {
      smStream.write({
        url: `/${slug}`,
        changefreq: freq || 'weekly',
        priority: priority || 0.6,
      })
    })

    const posts = await api.cms.getByTypeAndTags('blog_post', {
      fetch: ['blog_post.uid', 'blog_post.header_image'],
    })
    posts.forEach((item) => {
      smStream.write({
        ...(item.data?.header_image?.thumb?.url
          ? {
              img: {
                url: item.data?.header_image?.thumb?.url,
              },
            }
          : null),
        url: `/blog/${item.uid}`,
        changefreq: 'daily',
        priority: 0.8,
      })
    })

    const testimonials = await api.cms.getByTypeAndTags('testimonial', {
      fetch: ['testimonial.picture', 'testimonial.uid'],
    })
    testimonials.forEach((item) => {
      smStream.write({
        url: `/eu-uso/${item.uid}`,
        changefreq: 'monthly',
        priority: 0.5,
        img: {
          url: item.data?.picture?.url,
        },
      })
    })

    const faqItems = await api.cms.getByTypeAndTags('faq_item', {
      fetch: 'faq_item.uid',
    })
    faqItems.forEach((item) => {
      smStream.write({
        url: `/faq/${item.uid}`,
        changefreq: 'weekly',
        priority: 0.4,
      })
    })

    const members = await api.cms.getByTypeAndTags('team_member', {
      fetch: ['team_member.picture', 'team_member.uid'],
    })
    members.forEach((item) => {
      smStream.write({
        url: `/equipe/${item.uid}`,
        changefreq: 'monthly',
        priority: 0.3,
        img: {
          url: item.data?.picture?.url,
        },
      })
    })
  } catch (err) {
    console.error(err)
  } finally {
    smStream.end()
    return writeFile(smStream)
  }
}

async function writeFile(stream) {
  const xml = (await streamToPromise(stream)).toString()
  return writeFileSync(__dirname + '/../public/sitemap.xml', xml)
}
