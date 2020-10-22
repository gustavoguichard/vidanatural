import { GetStaticPaths } from 'next'

import api from 'lib/api'

const getStaticPaths: GetStaticPaths = async () => {
  const products = await api.vnda.fetch('products')
  return {
    paths: products.map((p: any) => ({
      params: { slug: [p.slug, p.id].join('-') },
    })),
    fallback: true,
  }
}

export default getStaticPaths
