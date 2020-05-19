import get from 'lodash/get'

import { Member } from 'types/cms'

export default (member: Member) => {
  const fullName = get(member, 'data.name.0.text', '')
  return {
    ...member,
    fullName,
    thumbUrl: get(member, 'data.picture.url'),
    imgAlt: get(member, 'data.picture.alt'),
    firstName: fullName.split(' '),
    permalink: {
      href: '/equipe/[name]',
      as: `/equipe/${member.uid}`,
    },
  }
}
