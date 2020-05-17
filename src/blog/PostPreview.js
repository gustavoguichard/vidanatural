import { memo } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import Img from 'src/components/Img'
import Link from 'src/components/Link'
import theme from 'src/ui/theme'

const PostPreview = ({
  author,
  dateFrom,
  readingTime,
  excerpt,
  titleText,
  thumbUrl,
  imgAlt,
  permalink,
  data,
}) => {
  return (
    <Grid container spacing={3} css={{ marginBottom: theme.spacing(6) }}>
      {thumbUrl && (
        <Grid item md={3}>
          <Link {...permalink}>
            <Img className="responsive" src={thumbUrl} alt={imgAlt} />
          </Link>
        </Grid>
      )}
      <Grid item md={9} css={{ 'a:link, a:visited': { color: 'inherit' } }}>
        <Link {...permalink}>
          <Typography variant="h3">{titleText}</Typography>
        </Link>
        <Box mt={1} mb={2}>
          <Typography variant="caption">
            <strong>
              <Link {...author.permalink}>{author.fullName}</Link>
            </strong>
            <br />
            <em> {dateFrom}</em> · {readingTime}
          </Typography>
        </Box>
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
