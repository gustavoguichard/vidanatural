import api from 'lib/api'

export default async () => {
  const team = await api.cms.getByTypeAndTags('team_member', {
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
  return { props: { team } }
}
