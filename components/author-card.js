import { memo } from 'react'

import { cx } from 'lib/utils'

import DocumentDetails from 'components/document-details'
import Img from 'components/img'
import Link from 'components/link'

const AuthorCard = ({
  author,
  date,
  post,
  showAvatar,
  disableLink,
  className,
}) => (
  <div className={cx('flex relative space-x-3', className)}>
    {showAvatar && (
      <Link href={author.permalink}>
        <Img
          className="h-10 w-10 rounded-full"
          alt={author.imgAlt}
          src={author.thumbUrl}
        />
      </Link>
    )}
    <DocumentDetails
      author={author}
      post={post}
      date={date}
      disableLink={disableLink}
    />
  </div>
)

export default memo(AuthorCard)
