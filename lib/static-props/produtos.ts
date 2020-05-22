import { GetStaticProps } from 'next'
import find from 'lodash/find'

import api from 'lib/api'

import localProducts from 'data/products'

const getStaticProps: GetStaticProps = async () => {
  const serverData = await api.vnda.search()
  const products = localProducts.map((p) => {
    const data = find(serverData, (servP) => p.slug.startsWith(servP.slug))
    return { ...data, ...p }
  })
  return { props: { products }, unstable_revalidate: 60 * 2 }
}

export default getStaticProps
