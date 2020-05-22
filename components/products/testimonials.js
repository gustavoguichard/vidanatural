import { memo } from 'react'
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import intersection from 'lodash/intersection'
import shuffle from 'lodash/shuffle'

import Testimonials from 'components/testimonials'

const ProductTestimonials = ({ testimonials, product, ...props }) => {
  const shuffled = shuffle(testimonials)
  const tags = map(product.tags, 'name')
  const [specific, general] = reduce(
    shuffled,
    ([spec, gener], item) => {
      const hasProductTag = intersection(tags, item.tags).length > 0
      return hasProductTag ? [[...spec, item], gener] : [spec, [...gener, item]]
    },
    [[], []],
  )
  const items = [...specific, ...general]
  return <Testimonials {...props} testimonials={items} />
}

export default memo(ProductTestimonials)
