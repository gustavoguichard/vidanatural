import { memo } from 'react'
import { Avatar, Box } from '@material-ui/core'

import theme from 'lib/theme'

import DocumentDetails from 'components/document-details'
import Img from 'components/img'
import Link from 'components/link'

const AuthorCard = ({
  author,
  date,
  post,
  showAvatar,
  disableLink,
  ...props
}) => {
  return (
    <Box mt={1} mb={2} display="flex" position="relative" {...props}>
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
    </Box>
  )
}

export default memo(AuthorCard)
