import api from 'lib/api'
import parsePost from 'lib/parsers/blog-post'
import { BlogPost } from 'types/cms'

export default async () => {
  const response = await api.cms.getByTypeAndTags('blog_post', {
    orderings: '[my.blog_post.date desc]',
    fetch: [
      'blog_post.title',
      'blog_post.body',
      'blog_post.author',
      'blog_post.header_image',
    ],
    fetchLinks: ['team_member.name', 'team_member.picture'],
  })
  const posts = (response as BlogPost[]).map(parsePost)
  return { props: { posts } }
}
