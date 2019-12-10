import shuffle from 'lodash/shuffle'
import Testimonials from 'src/components/Testimonials'
import { useProcessOnce } from 'utils/hooks'
import testimonials from 'data/testimonials'

const HomeTestimonials = props => {
  const items = useProcessOnce(shuffle, testimonials)
  return <Testimonials {...props} testimonials={items} />
}

export default HomeTestimonials
