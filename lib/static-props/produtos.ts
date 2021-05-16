import api from 'lib/api'
import parseProducts from 'lib/parsers/products'
import { getCategoryTags } from 'lib/domain'

import type { GetStaticProps } from 'next'
import type { VndaProduct } from 'types/vnda'

const getStaticProps: GetStaticProps = async () => {
  const serverData = await api.vnda.search()
  const products = parseProducts(serverData).sort((p: VndaProduct) => {
    const tags = p.tags.map((t) => t.name)
    return tags.includes('desodorante') ? -1 : tags.includes('kit') ? 1 : 0
  })

  const filters = getCategoryTags(products)

  return { props: { products, filters }, revalidate: 15 }
}

export default getStaticProps
