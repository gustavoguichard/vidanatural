import shuffle from 'lodash/shuffle'
import filter from 'lodash/filter'
import Testimonials from 'src/components/Testimonials'
import { useProcessOnce } from 'lib/hooks'
import testimonials from 'data/testimonials'

const filterByTag = (tag) => (item) => item.tags.includes(tag)

const ProductTestimonials = ({ product, ...props }) => {
  const filteredTestimonials = filter(testimonials, filterByTag(product.path))
  const genericTestimonials = filter(testimonials, filterByTag('all'))
  const shuffled = useProcessOnce(shuffle, filteredTestimonials)
  const shuffledGeneric = useProcessOnce(shuffle, genericTestimonials)
  const items = [...shuffled, ...shuffledGeneric]
  return <Testimonials {...props} testimonials={items} />
}

export default ProductTestimonials
