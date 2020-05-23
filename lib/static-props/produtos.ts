import reduce from 'lodash/reduce'
import uniqBy from 'lodash/uniqBy'
import { GetStaticProps } from 'next'

import api from 'lib/api'
import parseProduct from 'lib/parsers/product'

import { VndaProduct, ProductTag } from 'types/vnda'

const getCategoryTags = (products: VndaProduct[]) => {
  const isCategoryType = (cat: ProductTag) => cat.type === 'product_cat'
  const allCategoryTags = reduce(
    products,
    (result, product) => [...result, ...product.tags.filter(isCategoryType)],
    [] as ProductTag[],
  )
  return [
    { name: 'promocoes', title: 'Promoções' },
    ...uniqBy(allCategoryTags, 'name').sort((cat) =>
      cat.name === 'kit' ? -1 : 1,
    ),
  ]
}

const getStaticProps: GetStaticProps = async () => {
  const serverData = await api.vnda.search()
  const products = serverData.map(parseProduct).sort((p: VndaProduct) => {
    const tags = p.tags.map((t) => t.name)
    return tags.includes('desodorante') ? -1 : tags.includes('kit') ? 1 : 0
  })

  const filters = getCategoryTags(products)

  return { props: { products, filters }, unstable_revalidate: 60 * 2 }
}

export default getStaticProps
