import { memo } from 'react'
import { Avatar, Box } from '@material-ui/core'

import theme from 'lib/theme'

import DocumentDetails from 'components/document-details'
import Link from 'components/link'

const AuthorCard = ({ author, date, post, showAvatar, ...props }) => {
  return (
    <Box mt={1} mb={2} display="flex" position="relative" {...props}>
      {showAvatar && (
        <Link {...author.permalink} css={{ margin: theme.spacing(0, 1) }}>
          <Avatar alt={author.imgAlt} src={author.thumbUrl} />
        </Link>
      )}
      <DocumentDetails author={author} post={post} date={date} />
    </Box>
  )
}

export default memo(AuthorCard)
