import { memo } from 'react'
import get from 'lodash/get'

import Img from 'components/img'
import SocialLinks from 'components/social-links'
import RichText from 'components/rich-text'

const TeamMember = (props) => {
  const { name, bio, picture, role, ...socialLinks } = props
  return (
    <div className="my-4 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:space-x-4 md:space-x-0 lg:space-x-4 space-y-2 sm:space-y-0 md:space-y-2 lg:space-y-0">
      <Img
        className="sm:w-1/3 md:w-auto lg:w-1/3 md: rounded-lg self-stretch object-cover object-top"
        src={get(picture, 'url')}
        alt={get(picture, 'alt')}
        title={name}
      />
      <div>
        <h5 className="text-lg font-semibold tracking-tight">{name}</h5>
        <p className="mb-2 font-semibold text-gray-600">{role}</p>
        <RichText className="text-gray-700 leading-relaxed">{bio}</RichText>
        <SocialLinks {...socialLinks} />
      </div>
    </div>
  )
}

export default memo(TeamMember)
