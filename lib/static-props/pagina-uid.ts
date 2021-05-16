import api from 'lib/api'

import type { GetStaticProps } from 'next'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { pageId } = params
  const page = await api.vnda.listPage(pageId as string)
  return { props: { page } }
}

export default getStaticProps
