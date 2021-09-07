import shuffle from 'lodash/shuffle'
import take from 'lodash/take'

import api from 'lib/api'
import parsePost from 'lib/parsers/blog-post'

import type { BlogPost } from 'types/cms'
import type { ParsedProduct } from 'types/vnda'

export default async () => {
  const testimonialsData = await api.cms.getByTypeAndTags('testimonial', {
    fetch: [
      'name',
      'picture',
      'content',
      'short_content',
      'role',
      'location',
    ].map((field) => `testimonial.${field}`),
  })
  const banners = await api.cms.getByTypeAndTags('home_banner', {
    orderings: '[my.home_banner.order]',
  })
  const postsResponse = await api.cms.getByTypeAndTags('blog_post', {
    orderings: '[my.blog_post.date desc]',
    fetch: ['title', 'body', 'author', 'header_image', 'date'].map(
      (tag) => `blog_post.${tag}.`,
    ),
    fetchLinks: ['team_member.name', 'team_member.picture'],
    pageSize: 4,
  })
  const productsRes = await api.vnda.fetchFromAPI('products')
  const parsedProducts: ParsedProduct[] = await Promise.all(
    productsRes.data.map(api.vnda.endpoints.populateProducts),
  )
  const products = take(
    parsedProducts
      .filter((p: ParsedProduct) => p.inStock)
      .sort((p: ParsedProduct) => {
        return p.tag_names.includes('mais-vendidos') ? -1 : 1
      }),
    6,
  )
  const posts = (postsResponse as BlogPost[]).map(parsePost)
  const testimonials = shuffle(testimonialsData)
  return {
    props: { banner: banners[0], testimonials, posts, products },
    revalidate: 60 * 10,
  }
}
