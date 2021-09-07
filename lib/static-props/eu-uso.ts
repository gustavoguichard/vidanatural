import shuffle from 'lodash/shuffle'

import api from 'lib/api'

async function EuUso() {
  const results = await api.cms.getByTypeAndTags('testimonial', {
    fetch: ['name', 'picture', 'is_long'].map(
      (field) => `testimonial.${field}`,
    ),
  })
  const testimonials = shuffle(results)
  return { props: { testimonials }, revalidate: 60 * 60 }
}

export default EuUso
