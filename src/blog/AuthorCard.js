import { memo } from 'react'
import { Avatar, Box, Typography } from '@material-ui/core'
import Link from 'src/components/Link'
import theme from 'src/ui/theme'

const AuthorCard = ({
  author,
  dateFrom,
  readingTime,
  showAvatar,
  ...props
}) => {
  return (
    <Box mt={1} mb={2} display="flex" position="relative" {...props}>
      {showAvatar && (
        <Link {...author.permalink} css={{ margin: theme.spacing(0, 1) }}>
          <Avatar alt={author.imgAlt} src={author.thumbUrl} />
        </Link>
      )}
      <Typography variant="caption">
        Escrito por{' '}
        <strong>
          <Link {...author.permalink}>{author.fullName}</Link>
        </strong>
        <br />
        <em>
          {' '}
          {dateFrom} · {readingTime} de leitura
        </em>
      </Typography>
    </Box>
  )
}

export default memo(AuthorCard)
