import { timeSince, calculatePostReadTime } from 'lib/domain'
import { memo } from 'react'

import { cx } from 'lib/utils'

import Img from 'components/img'
import Link from 'components/link'

const AuthorCard = ({ author, date, post, showAvatar, className }) => (
  <div className={cx('flex items-center mt-6', className)}>
    <div className="flex-shrink-0">
      <Link className="block" href={author?.permalink}>
        <span className="sr-only">{author?.data?.name}</span>
        {showAvatar && author?.thumbUrl && (
          <Img
            className="w-10 h-10 rounded-full"
            src={author.thumbUrl}
            alt={author.imageAlt}
          />
        )}
      </Link>
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-gray-900">
        <Link href={author?.permalink} className="hover:underline">
          {author?.data?.name}
        </Link>
      </p>
      <div className="flex space-x-1 text-sm text-gray-500">
        {date && <time dateTime={date.toString()}>há {timeSince(date)}</time>}
        <span aria-hidden="true">&middot;</span>
        <span>{calculatePostReadTime(post)} de leitura</span>
      </div>
    </div>
  </div>
)

export default memo(AuthorCard)
