import trim from 'lodash/trim'

import { VndaProduct } from 'types/vnda'

export default (product: VndaProduct) => {
  const brokenDesc = product.description.split(`\n<hr/>\n`).map(trim)
  const stock = +(product.variants[0]?.stock || 0)
  const inStock = stock > 0
  const description =
    brokenDesc.length > 1
      ? {
          featured: brokenDesc[0],
          presentation: brokenDesc[1],
          information: brokenDesc[2] || null,
          specifications: brokenDesc[3] || null,
        }
      : {
          presentation: brokenDesc[0],
        }
  return {
    ...product,
    slug: `${product.slug}-${product.id}`,
    stock,
    inStock,
    description,
  }
}
