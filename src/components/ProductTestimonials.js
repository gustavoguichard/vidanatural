import filter from 'lodash/filter'
import shuffle from 'lodash/shuffle'
import { useProcessOnce } from 'utils/hooks'
import testimonials from 'data/testimonials'
import Testimonials from 'src/components/Testimonials'

const filterByTag = tag => item => item.tags.includes(tag)

const ProductTestimonials = ({ product }) => {
  const shuffled = useProcessOnce(shuffle, testimonials)
  const filteredTestimonials = filter(shuffled, filterByTag(product.path))
  const genericTestimonials = filter(shuffled, filterByTag('all'))
  const items = [...filteredTestimonials, ...genericTestimonials]
  return (
    <Testimonials testimonials={items} background="/static/images/plants.jpg" />
  )
}

export default ProductTestimonials
