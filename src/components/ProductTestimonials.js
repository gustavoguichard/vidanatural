import filter from 'lodash/filter'
import testimonials from 'data/testimonials'
import Testimonials from 'src/components/Testimonials'

const filterByTag = tag => item => item.tags.includes(tag)

const ProductTestimonials = ({ product }) => {
  const filteredTestimonials = filter(testimonials, filterByTag(product.path))
  const genericTestimonials = filter(testimonials, filterByTag('all'))
  const items =
    filteredTestimonials.length < 3
      ? [...filteredTestimonials, ...genericTestimonials]
      : filteredTestimonials
  return <Testimonials testimonials={items} />
}

export default ProductTestimonials
