import { GetStaticProps } from 'next'

import api from 'lib/api'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { name } = params
  const props = await api.cms.getBySlug('testimonial', name as string)
  return { props }
}

export default getStaticProps
