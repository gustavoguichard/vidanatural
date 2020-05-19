import { GetStaticProps } from 'next'

import api from 'lib/api'
import parsePost from 'lib/parsers/blog-post'

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
  const props = response ? parsePost(response as BlogPost) : {}
  return { props }
}

export default getStaticProps
