import shuffle from 'lodash/shuffle'

import { useProcessOnce } from 'lib/hooks'

import Testimonials from 'components/testimonials'

import testimonials from 'data/testimonials'

const HomeTestimonials = (props) => {
  const items = useProcessOnce(shuffle, testimonials)
  return <Testimonials {...props} testimonials={items} />
}

export default HomeTestimonials
