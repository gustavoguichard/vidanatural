import { memo } from 'react'
import get from 'lodash/get'
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import SocialLinks from 'components/social-links'

const Member = (props) => {
  const { name, bio, picture, role, ...socialLinks } = props
  return (
    <Grid
      css={{ marginTop: '1rem', marginBottom: '1rem' }}
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Card elevation={0}>
        <CardMedia
          css={{ height: 240, backgroundPositionY: 'top' }}
          image={get(picture, 'url')}
          alt={get(picture, 'alt')}
          title={get(name, '0.text')}
        />
        <CardContent css={{ paddingBottom: 0 }}>
          <Typography component="div" variant="body1">
            <strong>{get(name, '0.text')}</strong>
            <br />
            <Typography variant="subtitle2">{role}</Typography>
            <RichText render={bio} />
          </Typography>
        </CardContent>
        <CardActions>
          <SocialLinks {...socialLinks} />
        </CardActions>
      </Card>
    </Grid>
  )
}

export default memo(Member)
