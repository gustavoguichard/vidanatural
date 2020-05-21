import get from 'lodash/get'

import { TeamMember } from 'types/cms'

export default (member: TeamMember) => ({
  ...member,
  thumbUrl: get(member, 'data.picture.url'),
  imgAlt: get(member, 'data.picture.alt'),
  firstName: member.data.name.split(' '),
  permalink: {
    href: '/equipe/[name]',
    as: `/equipe/${member.uid}`,
  },
})
