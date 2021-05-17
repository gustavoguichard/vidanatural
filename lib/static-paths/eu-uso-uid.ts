import api from 'lib/api'

import type { GetStaticPaths } from 'next'
import type { Testimonial } from 'types/cms'

const getStaticPaths: GetStaticPaths = async () => {
  const items = await api.cms.getByTypeAndTags('testimonial', {
    fetch: 'testimonial.uid',
  })
  return {
    paths: (items as Testimonial[]).map((item) => ({
      params: { name: item.uid },
    })),
    fallback: false,
  }
}

export default getStaticPaths
