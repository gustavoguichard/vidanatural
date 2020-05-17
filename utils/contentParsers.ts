import get from 'lodash/get'
import { Post, Member } from './typeDeclarations'
import { formatDate, calculatePostReadTime, getExcerpt } from 'utils/helpers'

export const parseMember = (member: Member) => {
  const fullName = get(member.data.name, '0.text', '')
  return {
    ...member,
    fullName,
    firstName: fullName.split(' '),
    permalink: {
      href: '/equipe/[name]',
      as: `/equipe/${member.uid}`,
    },
  }
}

export const parsePost = (post: Post, authors: any) => {
  const { uid, first_publication_date, data } = post
  const { title, date, body, header_image } = data
  const titleText = get(title, '0.text')
  const thumbUrl = get(header_image, 'thumb.url', null)
  const rawAuthor = authors.find((a: Member) => a.id === get(data.author, 'id'))
  const author = parseMember(rawAuthor)
  const permalink = { href: '/blog/[slug]', as: `/blog/${uid}` }
  return {
    ...post,
    titleText,
    thumbUrl,
    permalink,
    author,
    date: date || first_publication_date,
    dateFrom: formatDate(date || first_publication_date),
    readingTime: calculatePostReadTime(body),
    excerpt: getExcerpt(body),
  }
}
