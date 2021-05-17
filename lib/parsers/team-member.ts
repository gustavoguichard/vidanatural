import get from 'lodash/get'

import type { TeamMember } from 'types/cms'

export default (member: TeamMember) => ({
  ...member,
  thumbUrl: get(member, 'data.picture.url'),
  imgAlt: get(member, 'data.picture.alt'),
  firstName: member.data.name.split(' '),
  permalink: `/equipe/${member.uid}`,
})
