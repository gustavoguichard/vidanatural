import get from 'lodash/get'
import { Post, Member } from 'types/cms'
import parseMember from './member'
import { getFromDate, calculatePostReadTime, getExcerpt } from 'lib/domain'

export default (post: Post, authors: any) => {
  const { uid, first_publication_date, data } = post
  const { title, date, body, header_image } = data
  const titleText = get(title, '0.text')
  const thumbUrl = get(header_image, 'thumb.url', null)
  const featuredUrl = get(header_image, 'url', null)
  const imgAlt = get(header_image, 'alt', titleText)
  const rawAuthor = authors.find((a: Member) => a.id === get(data.author, 'id'))
  const author = parseMember(rawAuthor)
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
    dateFrom: getFromDate(date || first_publication_date),
    readingTime: calculatePostReadTime(body),
    excerpt: getExcerpt(body),
  }
}
