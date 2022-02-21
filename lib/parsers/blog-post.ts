import { getExcerpt } from '../domain'

import type { BlogPost } from 'types/cms'
import type { RichTextBlock } from 'prismic-reactjs'

function parseBlogPost(post: BlogPost) {
  const { uid, first_publication_date, data } = post
  const { title, date, body, header_image } = data
  const thumbUrl = header_image?.thumb?.url ?? null
  const featuredUrl = header_image?.url ?? null
  const imgAlt = header_image?.alt ?? title
  const permalink = `/blog/${uid}`
  return {
    ...post,
    thumbUrl,
    featuredUrl,
    imgAlt,
    permalink,
    author: data.author,
    date: date || first_publication_date,
    excerpt: getExcerpt(body as RichTextBlock[]),
  }
}

export default parseBlogPost
