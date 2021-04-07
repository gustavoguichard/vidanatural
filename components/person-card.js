import { memo } from 'react'

import Img from 'components/img'
import RichText from 'components/rich-text'

const PersonMember = ({ name, image, content, title, children }) => (
  <div className="grid grid-flow-row sm:grid-cols-3 my-4 gap-4">
    <Img
      className="h-80 sm:h-auto row-span-1 sm:col-span-1 rounded-lg"
      objectPosition="top"
      src={image}
      alt={name}
      title={name}
    />
    <div className="sm:col-span-2">
      <h5 className="text-lg font-semibold tracking-tight">{name}</h5>
      <p className="mb-2 font-semibold text-gray-600">{title}</p>
      <RichText className="text-gray-700">{content}</RichText>
      {children}
    </div>
  </div>
)

export default memo(PersonMember)
