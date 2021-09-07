import get from 'lodash/get'

import type { TeamMember } from 'types/cms'

function parseTeamMember(member: TeamMember) {
  return {
    ...member,
    thumbUrl: get(member, 'data.picture.url'),
    imgAlt: get(member, 'data.picture.alt'),
    firstName: member.data.name.split(' '),
    permalink: `/equipe/${member.uid}`,
  }
}

export default parseTeamMember
