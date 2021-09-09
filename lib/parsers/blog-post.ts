import get from 'lodash/get'

import { getExcerpt } from '../domain'
import parseMember from './team-member'

import type { BlogPost } from 'types/cms'
import type { RichTextBlock } from 'prismic-reactjs'

function parseBlogPost(post: BlogPost) {
  const { uid, first_publication_date, data } = post
  const { title, date, body, header_image } = data
  const thumbUrl = get(header_image, 'thumb.url', null)
  const featuredUrl = get(header_image, 'url', null)
  const imgAlt = get(header_image, 'alt', title)
  const author = parseMember(data.author)
  const permalink = `/blog/${uid}`
  return {
    ...post,
    thumbUrl,
    featuredUrl,
    imgAlt,
    permalink,
    author,
    date: date || first_publication_date,
    excerpt: getExcerpt(body as RichTextBlock[]),
  }
}

export default parseBlogPost
