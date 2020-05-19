import { GetStaticPaths } from 'next'

import api from 'lib/api'
import { BLOG_PAGE_SIZE } from 'lib/constants'

const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.cms.getPaginated('blog_post', {
    fetch: 'blog_post.uid',
    pageSize: BLOG_PAGE_SIZE,
  })
  return {
    paths: [...Array(response.total_pages).keys()].map((index) => ({
      params: { number: `${index + 1}` },
    })),
    fallback: true,
  }
}

export default getStaticPaths
