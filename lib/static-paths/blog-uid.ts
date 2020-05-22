import { GetStaticPaths } from 'next'

import api from 'lib/api'

import { BlogPost } from 'types/cms'

const getStaticPaths: GetStaticPaths = async () => {
  const items = await api.cms.getByTypeAndTags('blog_post', {
    fetch: 'blog_post.uid',
  })
  return {
    paths: (items as BlogPost[]).map((item) => ({
      params: { slug: item.uid },
    })),
    fallback: false,
  }
}

export default getStaticPaths
