import api from 'lib/api'
import parsePost from 'lib/parsers/blog-post'

import type { GetStaticProps } from 'next'
import type { BlogPost } from 'types/cms'

const getStaticProps: GetStaticProps = async () => {
  const response = await api.cms.getPaginated('blog_post', {
    orderings: '[my.blog_post.date desc]',
    fetch: ['title', 'body', 'author', 'header_image', 'date'].map(
      (tag) => `blog_post.${tag}.`,
    ),
    fetchLinks: ['team_member.name', 'team_member.picture'],
  })
  const posts = (response.results as BlogPost[]).map(parsePost)
  return { props: { posts } }
}

export default getStaticProps
