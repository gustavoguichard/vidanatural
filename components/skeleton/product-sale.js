import { Grid } from '@material-ui/core'

import theme from 'lib/theme'

import ProductContainer from 'components/products/container'
import Skeleton from './index'

const PostSkeleton = () => (
  <ProductContainer>
    <Grid item xs={12} md={6}>
      <Skeleton height={400} />
    </Grid>
    <Grid item xs={12} md={6} style={{ padding: theme.spacing(2, 5) }}>
      <Skeleton css={{ height: 40, marginBottom: theme.spacing() }} />
      <Skeleton variant="text" css={{ width: '30%' }} />
      <Skeleton css={{ height: 300, margin: theme.spacing(3, 0, 2) }} />
      <Skeleton css={{ width: '50%', height: 50 }} />
    </Grid>
  </ProductContainer>
)

export default PostSkeleton
