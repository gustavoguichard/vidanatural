import api from 'lib/api'

import type { GetStaticProps } from 'next'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { name } = params
  const props = await api.cms.getBySlug('team_member', name as string, {
    fetch: [
      'name',
      'picture',
      'role',
      'bio',
      'facebook',
      'linkedin',
      'instagram',
      'github',
    ].map((field) => `team_member.${field}`),
  })
  return { props: { ...props.data } }
}

export default getStaticProps
