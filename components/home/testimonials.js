import shuffle from 'lodash/shuffle'

import Testimonials from 'components/testimonials'

const HomeTestimonials = ({ testimonials, ...props }) => {
  const items = shuffle(testimonials)
  return <Testimonials {...props} testimonials={items} />
}

export default HomeTestimonials
