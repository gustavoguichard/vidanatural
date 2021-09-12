import api from 'lib/api'
import { getProductsByTag } from 'lib/domain'
import parsePost from 'lib/parsers/blog-post'

import type { GetStaticProps } from 'next'
import type { BlogPost } from 'types/cms'
import type { ParsedProduct } from 'types/vnda'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { slug } = params
  const response = await api.cms.getBySlug('blog_post', slug as string, {
    fetch: [
      'blog_post.title',
      'blog_post.body',
      'blog_post.author',
      'blog_post.header_image',
    ],
    fetchLinks: [
      'team_member.name',
      'team_member.picture',
      'team_member.github',
      'team_member.instagram',
      'team_member.linkedin',
      'team_member.facebook',
    ],
  })
  const post = response ? parsePost(response as BlogPost) : { tags: [] }
  const productsRes = await api.vnda.fetchFromAPI('products')
  const parsedProducts: ParsedProduct[] = await Promise.all(
    productsRes.data.map(api.vnda.endpoints.populateProducts),
  )
  const products = getProductsByTag(parsedProducts, post.tags)
  return { props: { ...post, products } }
}

export default getStaticProps
