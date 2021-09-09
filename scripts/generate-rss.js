import { writeFileSync } from 'fs'
import RSS from 'rss'
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(async () => {
  await generate()
  process.exit(0)
})

global.fetch = require('node-fetch')

import api from '../lib/api'
import parsePost from '../lib/parsers/blog-post'
import { BLOG_DESCRIPTION } from '../lib/constants'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: __dirname + '/../.env.local' })
}

const config = {
  title: 'Blog da Vida Natural',
  description: BLOG_DESCRIPTION,
  feed_url: 'https://vidanatural.eco.br/blog/feed',
  site_url: 'https://vidanatural.eco.br/blog/',
  image_url: 'https://vidanatural.eco.br/static/logo_bg.jpg',
  managingEditor: 'falecom@vidanatural.eco.br (Lila Ozorio)',
  webMaster: 'guga@vidanatural.eco.br (Gustavo Guichard)',
  copyright: '2020 Vida Natural',
  language: 'pt-br',
  ttl: '300',
}

async function generate() {
  try {
    const response = await api.cms.getByTypeAndTags('blog_post', {
      orderings: '[my.blog_post.date desc]',
      fetch: [
        'blog_post.title',
        'blog_post.body',
        'blog_post.author',
        'blog_post.header_image',
      ],
      fetchLinks: ['team_member.name', 'team_member.picture'],
    })
    const posts = response.map(parsePost)
    const [lastPost] = posts
    const feed = new RSS({
      ...config,
      pubDate: lastPost.date,
    })
    posts.forEach((post) => {
      const url = `https://${process.env.NEXT_PUBLIC_API_DOMAIN}/blog/${post.uid}`
      feed.item({
        url,
        title: post.data.title,
        description: post.excerpt,
        guid: post.id,
        categories: post.tags,
        author: post.author.data.name,
        date: post.date,
        enclosure: post.thumbUrl
          ? {
              url: post.thumbUrl,
              type: 'image/jpeg',
            }
          : null,
        image: post.thumbUrl
          ? {
              title: post.data.title,
              url: post.thumbUrl,
              link: url,
            }
          : null,
      })
    })
    const xml = feed.xml()
    return writeFile(xml)
  } catch (e) {
    console.log(e)
    return false
  }
}

async function writeFile(xml) {
  return writeFileSync(__dirname + '/../public/feed.xml', xml)
}
