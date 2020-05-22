import api from 'lib/api'

export default async () => {
  const testimonials = await api.cms.getByTypeAndTags('testimonial', {
    fetch: ['name', 'picture', 'content', 'short_content'].map(
      (field) => `testimonial.${field}`,
    ),
  })
  return { props: { testimonials } }
}
