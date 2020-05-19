import { GetStaticPaths } from 'next'
import flatten from 'lodash/flatten'
import map from 'lodash/map'
import uniq from 'lodash/uniq'

import api from 'lib/api'

const getStaticPaths: GetStaticPaths = async () => {
  const items = await api.cms.getByTypeAndTags('blog_post', {
    fetch: 'blog_post.slugs',
  })
  const allSlugs = map(items, 'slugs')
  const slugs = uniq(flatten(allSlugs))
  return {
    paths: map(slugs, (slug) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export default getStaticPaths
