import get from 'lodash/get'
import forEach from 'lodash/forEach'
import { SitemapStream, streamToPromise } from 'sitemap'

import api from 'lib/api'
import vnda from 'lib/api/vnda2'

const pages = {
  produtos: ['daily', 1.0],
  blog: ['daily', 0.9],
  'sobre-a-vida-natural': [],
  'onde-encontrar': ['monthly', 0.5],
  faq: [],
  'eu-uso-cosmetica-consciente': [],
  'entre-em-contato': ['monthly', 0.4],
  'termos-e-condicoes': ['monthly', 0.3],
  // 'minha-conta',
}

const Sitemap = ({ xml }) => xml

export async function getServerSideProps({ res }) {
  try {
    const productsResponse = await vnda.fetcher('products')
    const smStream = new SitemapStream({
      hostname: process.env.API_IP,
      cacheTime: 600000,
    })

    const posts = await api.cms.getByTypeAndTags('blog_post', {
      fetch: ['blog_post.uid', 'blog_post.header_image'],
    })
    const faqItems = await api.cms.getByTypeAndTags('faq_item', {
      fetch: 'faq_item.uid',
    })
    const members = await api.cms.getByTypeAndTags('team_member', {
      fetch: ['team_member.picture', 'team_member.uid'],
    })
    const testimonials = await api.cms.getByTypeAndTags('testimonial', {
      fetch: ['testimonial.picture', 'testimonial.uid'],
    })

    smStream.write({
      url: `/`,
      changefreq: 'daily',
      priority: 1.0,
    })

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

    forEach(pages, ([freq, priority], slug) => {
      smStream.write({
        url: `/${slug}`,
        changefreq: freq || 'weekly',
        priority: priority || 0.6,
      })
    })

    posts.forEach((item) => {
      smStream.write({
        ...(get(item, 'data.header_image.thumb.url')
          ? {
              img: {
                url: get(item, 'data.header_image.thumb.url'),
              },
            }
          : null),
        url: `/blog/${item.uid}`,
        changefreq: 'daily',
        priority: 0.8,
      })
    })

    testimonials.forEach((item) => {
      smStream.write({
        url: `/eu-uso/${item.uid}`,
        changefreq: 'monthly',
        priority: 0.5,
        img: {
          url: get(item, 'data.picture.url'),
        },
      })
    })

    faqItems.forEach((item) => {
      smStream.write({
        url: `/faq/${item.uid}`,
        changefreq: 'weekly',
        priority: 0.4,
      })
    })

    members.forEach((item) => {
      smStream.write({
        url: `/equipe/${item.uid}`,
        changefreq: 'monthly',
        priority: 0.3,
        img: {
          url: get(item, 'data.picture.url'),
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
    return { props: { xml } }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
    res.end(JSON.stringify(e))
    return { props: { xml: null } }
  }
}

export default Sitemap
