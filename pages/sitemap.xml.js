import { SitemapStream, streamToPromise } from 'sitemap'
import testimonials from 'data/testimonials'
import api from 'lib/api'

const pages = [
  'produtos',
  'blog',
  'sobre-a-vida-natural',
  'onde-encontrar',
  'faq',
  'eu-uso-cosmetica-consciente',
  'entre-em-contato',
  'termos-e-condicoes',
  // 'minha-conta',
]

const Sitemap = ({ xml }) => xml

export async function getServerSideProps({ res }) {
  try {
    const productList = await api.vnda.search()
    const smStream = new SitemapStream({
      hostname: process.env.API_IP,
      cacheTime: 600000,
    })

    const posts = await api.cms.getByTypeAndTags('blog_post')
    const faqItems = await api.cms.getByTypeAndTags('faq_item')
    const members = await api.cms.getByTypeAndTags('team_member')

    smStream.write({
      url: `/`,
      changefreq: 'daily',
      priority: 1.0,
    })

    productList.forEach((product) => {
      smStream.write({
        url: product.url.replace('/produto/', '/produtos/'),
        changefreq: 'daily',
        priority: 0.8,
        img: {
          url: product.image_url,
        },
      })
    })

    pages.forEach((page) => {
      smStream.write({
        url: `/${page}`,
        changefreq: 'weekly',
        priority: 0.6,
      })
    })

    posts.forEach((item) => {
      smStream.write({
        url: `/blog/${item.uid}`,
        changefreq: 'daily',
        priority: 0.8,
      })
    })

    testimonials.forEach((testimonial) => {
      smStream.write({
        url: `/eu-uso/${testimonial.picture}`,
        changefreq: 'monthly',
        priority: 0.5,
        img: {
          url: `/static/images/testimonials/${testimonial.picture}.jpg`,
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
