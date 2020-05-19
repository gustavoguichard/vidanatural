import { GetStaticProps } from 'next'

import api from 'lib/api'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { slug } = params
  const props = await api.cms.getBySlug('faq_item', slug as string, {
    fetch: ['faq_item.question', 'faq_item.answer'],
  })
  return { props }
}

export default getStaticProps
