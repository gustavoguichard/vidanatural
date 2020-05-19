import { Grid } from '@material-ui/core'

import theme from 'lib/theme'

import Skeleton from './index'

const PostSkeleton = () => (
  <Grid container spacing={3} css={{ marginBottom: theme.spacing(6) }}>
    <Grid item sm={3}>
      <Skeleton height={190} />
    </Grid>
    <Grid item sm={9} md={9}>
      <Skeleton css={{ marginBottom: theme.spacing() }} height={74} />
      <Skeleton
        css={{ marginBottom: theme.spacing(2) }}
        height={40}
        width={300}
      />
      <Skeleton height={80} />
    </Grid>
  </Grid>
)

export default PostSkeleton
