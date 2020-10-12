import { memo } from 'react'

import { classes } from 'lib/utils'

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
}) => {
  const cx = classes('flex relative', className)
  return (
    <div className={cx}>
      {showAvatar && (
        <Link {...author.permalink} className="mx-2">
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
}

export default memo(AuthorCard)
