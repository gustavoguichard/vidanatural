import { memo } from 'react'
import { Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import AuthorCard from 'components/author-card'
import Img from 'components/img'
import Link from 'components/link'

const PostPreview = ({
  author,
  dateFrom,
  readingTime,
  excerpt,
  titleText,
  thumbUrl,
  imgAlt,
  permalink,
}) => {
  return (
    <Grid container spacing={3} css={{ marginBottom: theme.spacing(6) }}>
      {thumbUrl && (
        <Grid item sm={3}>
          <Link {...permalink}>
            <Img className="responsive" src={thumbUrl} alt={imgAlt} />
          </Link>
        </Grid>
      )}
      <Grid
        item
        sm={thumbUrl ? 9 : 12}
        md={9}
        css={{ 'a:link, a:visited': { color: 'inherit' } }}
      >
        <Link {...permalink}>
          <Typography variant="h3">{titleText}</Typography>
        </Link>
        <AuthorCard
          author={author}
          readingTime={readingTime}
          dateFrom={dateFrom}
        />
        <Typography css={{ marginBottom: theme.spacing() }} variant="body1">
          {excerpt}
        </Typography>
        <Typography variant="caption">
          <Link {...permalink}>Ler mais</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default memo(PostPreview)