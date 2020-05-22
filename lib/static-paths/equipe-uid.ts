import { GetStaticPaths } from 'next'

import api from 'lib/api'

import { TeamMember } from 'types/cms'

const getStaticPaths: GetStaticPaths = async () => {
  const items = await api.cms.getByTypeAndTags('team_member', {
    fetch: 'team_member.uid',
  })
  return {
    paths: (items as TeamMember[]).map((item) => ({
      params: { name: item.uid },
    })),
    fallback: false,
  }
}

export default getStaticPaths
