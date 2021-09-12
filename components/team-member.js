import get from 'lodash/get'

import SocialLinks from 'components/social-links'
import PersonCard from 'components/person-card'

const TeamMember = ({
  name,
  bio,
  picture = {},
  role,
  full,
  ...socialLinks
}) => (
  <PersonCard
    name={name}
    content={bio}
    title={role}
    image={get(picture, 'url')}
  >
    <SocialLinks {...socialLinks} />
  </PersonCard>
)

export default TeamMember
