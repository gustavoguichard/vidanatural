import { memo } from 'react'
import startCase from 'lodash/startCase'
import { FiTag } from 'react-icons/fi'

import Link from 'components/link'

const PostTags = ({ tags }) => (
  <div className="my-4">
    {tags
      .filter((t) => t !== 'institucional')
      .map((tag, idx) => (
        <Link
          className="inline-flex border hover:underline hover:border-gray-500 border-gray-400 hover:bg-gray-100 rounded-lg px-1 items-center text-gray-700 m-1 text-xs"
          href={`/tag/${tag}`}
          key={`tag-${idx}`}
        >
          <FiTag className="mr-1" /> {startCase(tag)}
        </Link>
      ))}
  </div>
)

export default memo(PostTags)
