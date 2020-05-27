import shuffle from 'lodash/shuffle'

import api from 'lib/api'
import parsePost from 'lib/parsers/blog-post'

import { BlogPost } from 'types/cms'

export default async () => {
  const testimonialsData = await api.cms.getByTypeAndTags('testimonial', {
    fetch: ['name', 'picture', 'content', 'short_content'].map(
      (field) => `testimonial.${field}`,
    ),
  })
  const banners = await api.cms.getByTypeAndTags('home_banner', {
    orderings: '[my.home_banner.order]',
  })
  const postsResponse = await api.cms.getByTypeAndTags('blog_post', {
    fetch: ['blog_post.title', 'blog_post.body', 'blog_post.author'],
    fetchLinks: ['team_member.name', 'team_member.picture'],
    pageSize: 4,
  })
  const posts = (postsResponse as BlogPost[]).map(parsePost)
  const testimonials = shuffle(testimonialsData)
  return { props: { banners, testimonials, posts } }
}
