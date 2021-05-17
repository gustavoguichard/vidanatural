import api from 'lib/api'

import type { GetStaticPaths } from 'next'
import type { VndaProduct } from 'types/vnda'

const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.vnda.fetchFromAPI('products')
  return {
    paths: response.data.map((p: VndaProduct) => ({
      params: { slug: [p.slug, p.id].join('-') },
    })),
    fallback: true,
  }
}

export default getStaticPaths
