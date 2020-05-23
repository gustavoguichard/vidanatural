import { GetStaticProps } from 'next'

import api from 'lib/api'
import parseProduct from 'lib/parsers/product'

import { VndaProduct } from 'types/vnda'

const getStaticProps: GetStaticProps = async () => {
  const serverData = await api.vnda.search()
  const products = serverData.map(parseProduct).sort((p: VndaProduct) => {
    const tags = p.tags.map((t) => t.name)
    return tags.includes('desodorante') ? -1 : tags.includes('kit') ? 1 : 0
  })

  return { props: { products }, unstable_revalidate: 60 * 2 }
}

export default getStaticProps
