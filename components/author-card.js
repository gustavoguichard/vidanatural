import { memo } from 'react'
import Img from 'next/image'

import { classes } from 'lib/utils'

import DocumentDetails from 'components/document-details'
import Link from 'components/link'

const AuthorCard = ({
  author,
  date,
  post,
  showAvatar,
  disableLink,
  className,
}) => {
  const cx = classes('flex relative space-x-3', className)
  return (
    <div className={cx}>
      {showAvatar && (
        <Link href={author.permalink}>
          <div className="h-10 w-10 rounded-full relative overflow-hidden">
            <Img
              layout="fill"
              unoptimized
              objectFit="cover"
              alt={author.imgAlt}
              src={author.thumbUrl}
            />
          </div>
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
