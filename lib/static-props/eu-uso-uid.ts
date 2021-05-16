import api from 'lib/api'

import type { GetStaticProps } from 'next'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { name } = params
  const props = await api.cms.getBySlug('testimonial', name as string)
  return { props }
}

export default getStaticProps
