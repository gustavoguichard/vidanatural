import { GetStaticProps } from 'next'

import api from 'lib/api'
import { getProductsByTag } from 'lib/domain'
import parsePost from 'lib/parsers/blog-post'

import { BlogPost } from 'types/cms'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { uid } = params
  const results = await api.cms.allByTags([uid as string], {
    fetchLinks: ['team_member.name', 'team_member.picture'],
  })
  const banners = results.filter((r) => r.type === 'home_banner')
  const testimonials = results.filter((r) => r.type === 'testimonial')
  const posts = (results.filter(
    (r) => r.type === 'blog_post',
  ) as BlogPost[]).map(parsePost)
  const faqItems = results.filter((r) => r.type === 'faq_item')
  const vndaProducts = await api.vnda.search()
  const products = getProductsByTag(vndaProducts, [uid as string])
  return { props: { products, banners, testimonials, posts, faqItems } }
}

export default getStaticProps
