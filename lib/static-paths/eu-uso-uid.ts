import { GetStaticPaths } from 'next'

import testimonials from 'data/testimonials'

const getStaticPaths: GetStaticPaths = async () => ({
  paths: testimonials.map((t) => ({ params: { name: t.picture } })),
  fallback: false,
})

export default getStaticPaths
