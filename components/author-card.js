import { memo } from 'react'
import { Avatar } from '@material-ui/core'

import theme from 'lib/theme'

import DocumentDetails from 'components/document-details'
import Img from 'components/img'
import Link from 'components/link'

const AuthorCard = ({ author, date, post, showAvatar, disableLink, style }) => {
  return (
    <div className="flex relative mt-2 mb-4" style={style}>
      {showAvatar && (
        <Link {...author.permalink} css={{ margin: theme.spacing(0, 1) }}>
          <Img
            Component={Avatar}
            circle
            width={40}
            height={40}
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
