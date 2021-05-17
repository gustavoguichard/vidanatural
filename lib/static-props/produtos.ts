import api from 'lib/api'
import { getCategoryTags } from 'lib/domain'

import type { GetStaticProps } from 'next'
import type { ParsedProduct } from 'types/vnda'

const getStaticProps: GetStaticProps = async () => {
  const response = await api.vnda.fetchFromAPI('products')
  const serverData: ParsedProduct[] = await Promise.all(
    response.data.map(api.vnda.endpoints.populateProducts),
  )
  const products = serverData.sort((p) => {
    const tags = p.tag_names
    return tags.includes('desodorante') ? -1 : tags.includes('kit') ? 1 : 0
  })

  const filters = getCategoryTags(products)

  return { props: { products, filters }, revalidate: 15 }
}

export default getStaticProps
