import api from 'lib/api'

export default async () => {
  const testimonials = await api.cms.getByTypeAndTags('testimonial', {
    fetch: ['name', 'picture', 'content', 'short_content'].map(
      (field) => `testimonial.${field}`,
    ),
  })
  const banners = await api.cms.getByTypeAndTags('home_banner', {
    orderings: '[my.home_banner.order]',
  })
  return { props: { banners, testimonials } }
}
