import get from 'lodash/get'

import { getFromDate, calculatePostReadTime, getExcerpt } from 'lib/domain'
import parseMember from './team-member'

import { Post, PostBody } from 'types/cms'

export default (post: Post) => {
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
    dateFrom: getFromDate((date || first_publication_date) as Date),
    readingTime: calculatePostReadTime(body as PostBody[]),
    excerpt: getExcerpt(body as PostBody[]),
  }
}
