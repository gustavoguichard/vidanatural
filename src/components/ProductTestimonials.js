import filter from 'lodash/filter'
import shuffle from 'lodash/shuffle'
import { Box, Typography } from '@material-ui/core'
import { useProcessOnce } from 'utils/hooks'
import theme from 'src/ui/theme'
import sloganImg from 'static/images/slogan.svg'
import testimonials from 'data/testimonials'
import Testimonials from 'src/components/Testimonials'

const filterByTag = tag => item => item.tags.includes(tag)

const ProductTestimonials = ({ product }) => {
  const shuffled = useProcessOnce(shuffle, testimonials)
  const filteredTestimonials = filter(shuffled, filterByTag(product.path))
  const genericTestimonials = filter(shuffled, filterByTag('all'))
  const items = [...filteredTestimonials, ...genericTestimonials]
  return <Testimonials showCTA testimonials={items} />
}

export default ProductTestimonials
