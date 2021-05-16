import api from 'lib/api'

import type { GetStaticPaths } from 'next'

const getStaticPaths: GetStaticPaths = async () => {
  const products = await api.vnda.search()
  return {
    paths: products.map((p: any) => ({
      params: { slug: [p.slug, p.id].join('-') },
    })),
    fallback: true,
  }
}

export default getStaticPaths
