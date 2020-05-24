import clamp from 'lodash/clamp'
import isEmpty from 'lodash/isEmpty'

import { useWindowDimensions } from 'lib/hooks'

import ProductCard from 'components/product-card'
import Carousel from 'components/carousel'

const RelatedProducts = ({ products }) => {
  const { width } = useWindowDimensions()
  const columns = clamp(Math.floor(width / 320), 1, 4)
  return isEmpty(products) ? null : (
    <Carousel
      itemWidth={`${100 / columns}%`}
      gap={1}
      NextButton={false}
      PrevButton={false}
      snap="proximity"
    >
      {products.map((product, index) => (
        <ProductCard key={`c-item-${index}`} product={product} />
      ))}
    </Carousel>
  )
}

export default RelatedProducts
