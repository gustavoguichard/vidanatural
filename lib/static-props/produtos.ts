import api from 'lib/api'
import { getCategoryTags } from 'lib/domain'

import type { GetStaticProps } from 'next'
import type { VndaProduct } from 'types/vnda'

const getStaticProps: GetStaticProps = async () => {
  const serverData = await api.vnda.endpoints.productsList()
  const products = serverData.sort((p: VndaProduct) => {
    const tags = p.tag_names
    return tags.includes('desodorante') ? -1 : tags.includes('kit') ? 1 : 0
  })

  const filters = getCategoryTags(products)

  return { props: { products, filters }, revalidate: 15 }
}

export default getStaticProps
