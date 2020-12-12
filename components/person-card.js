import { memo } from 'react'

import Img from 'components/img'
import RichText from 'components/rich-text'

const PersonMember = ({ name, image, content, title, children }) => (
  <div className="my-4 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:space-x-4 md:space-x-0 lg:space-x-4 space-y-2 sm:space-y-0 md:space-y-2 lg:space-y-0">
    <Img
      className="sm:w-1/3 md:w-auto lg:w-1/3 md: rounded-lg self-stretch object-cover object-top"
      src={image}
      alt={name}
      title={name}
    />
    <div>
      <h5 className="text-lg font-semibold tracking-tight">{name}</h5>
      <p className="mb-2 font-semibold text-gray-600">{title}</p>
      <RichText className="text-gray-700">{content}</RichText>
      {children}
    </div>
  </div>
)

export default memo(PersonMember)
