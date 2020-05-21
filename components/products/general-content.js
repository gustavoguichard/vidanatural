import { forwardRef } from 'react'
import { useRouter } from 'next/router'
import { Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import PriceTag from './price-tag'
import ProductCTA from './cta'
import Skeleton from 'components/skeleton'

const GeneralContent = ({ product = {}, isDesktop }, ref) => {
  const { isFallback } = useRouter()

  const [variant] = product.variants || [{}]

  return (
    <Grid
      item
      xs={12}
      md={6}
      css={{
        paddingLeft: `${theme.spacing(5)}px !important`,
        paddingRight: `${theme.spacing(5)}px !important`,
      }}
    >
      {isFallback ? (
        <>
          <Skeleton css={{ height: 40, marginBottom: theme.spacing() }} />
          <Skeleton variant="text" css={{ width: '30%' }} />
          <Skeleton css={{ height: 300, margin: theme.spacing(3, 0, 2) }} />
          <Skeleton css={{ width: '50%', height: 50 }} />
        </>
      ) : (
        <>
          {isDesktop && (
            <Typography variant="h3" css={{ marginBottom: theme.spacing() }}>
              {product.name}
            </Typography>
          )}
          <PriceTag item={variant} />
          <Typography
            variant="body1"
            component="div"
            css={{
              marginTop: theme.spacing(3),
              marginBottom: theme.spacing(2),
              fontWeight: 400,
              color: theme.palette.text.hint,
            }}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <PriceTag item={variant} />
          <ProductCTA ref={ref} product={product} />
        </>
      )}
    </Grid>
  )
}

export default forwardRef(GeneralContent)
