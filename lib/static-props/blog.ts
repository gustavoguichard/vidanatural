import { GetStaticProps } from 'next'

import api from 'lib/api'
import parsePost from 'lib/parsers/blog-post'
import { BLOG_PAGE_SIZE } from 'lib/constants'

import { BlogPost } from 'types/cms'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { number = 1 } = params
  const page = Number(number)
  const response = await api.cms.getPaginated('blog_post', {
    orderings: '[my.blog_post.date desc]',
    fetch: [
      'blog_post.title',
      'blog_post.body',
      'blog_post.author',
      'blog_post.header_image',
    ],
    fetchLinks: ['team_member.name', 'team_member.picture'],
    page,
    pageSize: BLOG_PAGE_SIZE,
  })
  const posts = (response.results as BlogPost[]).map(parsePost)
  return { props: { posts, page, pages: response.total_pages } }
}

export default getStaticProps
