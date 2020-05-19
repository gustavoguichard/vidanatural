import { GetStaticProps } from 'next'

import testimonials from 'data/testimonials'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { name } = params
  const testimonial = testimonials.find((t) => t.picture === name)
  return { props: { testimonial } }
}

export default getStaticProps
