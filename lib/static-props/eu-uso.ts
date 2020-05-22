import shuffle from 'lodash/shuffle'

import api from 'lib/api'

export default async () => {
  const results = await api.cms.getByTypeAndTags('testimonial', {
    fetch: ['name', 'picture', 'is_long'].map(
      (field) => `testimonial.${field}`,
    ),
  })
  const testimonials = shuffle(results)
  return { props: { testimonials }, unstable_revalidate: 60 * 60 }
}
