import get from 'lodash/get'

import { getExcerpt } from 'lib/domain'
import parseMember from './team-member'

import { BlogPost, PostBody } from 'types/cms'

export default (post: BlogPost) => {
  const { uid, first_publication_date, data } = post
  const { title, date, body, header_image } = data
  const titleText = get(title, '0.text')
  const thumbUrl = get(header_image, 'thumb.url', null)
  const featuredUrl = get(header_image, 'url', null)
  const imgAlt = get(header_image, 'alt', titleText)
  const author = parseMember(data.author)
  const permalink = { href: '/blog/[slug]', as: `/blog/${uid}` }
  return {
    ...post,
    titleText,
    thumbUrl,
    featuredUrl,
    imgAlt,
    permalink,
    author,
    date: date || first_publication_date,
    excerpt: getExcerpt(body as PostBody[]),
  }
}
