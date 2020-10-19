import { GetStaticProps } from 'next'

import api from 'lib/api'
import { getProductsByTag } from 'lib/domain'
import parsePost from 'lib/parsers/blog-post'
import parseProduct from 'lib/parsers/product'

import { BlogPost } from 'types/cms'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { slug } = params
  const response = await api.cms.getBySlug('blog_post', slug as string, {
    fetch: [
      'blog_post.title',
      'blog_post.body',
      'blog_post.author',
      'blog_post.header_image',
    ],
    fetchLinks: ['team_member.name', 'team_member.picture'],
  })
  const post = response ? parsePost(response as BlogPost) : { tags: [] }
  const vndaProducts = await api.vnda.search()
  const products = getProductsByTag(vndaProducts, post.tags).map(parseProduct)
  return { props: { ...post, products } }
}

export default getStaticProps
