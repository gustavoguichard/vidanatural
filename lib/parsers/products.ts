import type { VndaProduct } from 'types/vnda'

export default (products: VndaProduct[]) =>
  products.map((product) => {
    const stock = +(product.variants[0]?.stock || 0)
    const inStock = stock > 0
    return {
      ...product,
      slug: `${product.slug}-${product.id}`,
      stock,
      inStock,
    }
  })
