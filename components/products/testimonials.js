import { memo } from 'react'
import reduce from 'lodash/reduce'
import intersection from 'lodash/intersection'

import Testimonials from 'components/testimonials'

const ProductTestimonials = ({ testimonials, product, ...props }) => {
  const [specific, general] = reduce(
    testimonials,
    ([spec, gener], item) => {
      const hasProductTag =
        intersection(product.tag_names, item.tags).length > 0
      return hasProductTag ? [[...spec, item], gener] : [spec, [...gener, item]]
    },
    [[], []]
  )
  const items = [...specific, ...general]
  return (
    <div id="depoimentos">
      <Testimonials {...props} testimonials={items} />
    </div>
  )
}

export default memo(ProductTestimonials)
