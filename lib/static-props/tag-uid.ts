import api from 'lib/api'
import { getProductsByTag } from 'lib/domain'
import parsePost from 'lib/parsers/blog-post'

import type { GetStaticProps } from 'next'
import type { BlogPost } from 'types/cms'
import type { ParsedProduct } from 'types/vnda'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { uid } = params
  const results = await api.cms.allByTags([uid as string], {
    fetchLinks: ['team_member.name', 'team_member.picture'],
  })
  const banners = results.filter((r) => r.type === 'home_banner')
  const testimonials = results.filter((r) => r.type === 'testimonial')
  const posts = (
    results.filter((r) => r.type === 'blog_post') as BlogPost[]
  ).map(parsePost)
  const faqItems = results.filter((r) => r.type === 'faq_item')
  const productsRes = await api.vnda.fetchFromAPI('products')
  const parsedProducts: ParsedProduct[] = await Promise.all(
    productsRes.data.map(api.vnda.endpoints.populateProducts),
  )
  const products = getProductsByTag(parsedProducts, [uid as string])
  return {
    props: {
      products,
      banner: banners.length ? banners[0] : null,
      testimonials,
      posts,
      faqItems,
    },
  }
}

export default getStaticProps
