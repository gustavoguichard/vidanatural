import { GetStaticProps } from 'next'

import api from 'lib/api'

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
