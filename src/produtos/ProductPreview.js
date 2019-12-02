import { useState } from 'react'
import {
  Box,
  FormControl,
  MenuItem,
  Grid,
  Paper,
  Typography,
  Select,
  useMediaQuery,
} from '@material-ui/core'
import MdContent from 'src/components/MdContent'
import Link from 'src/components/Link'
import Img from 'src/components/Img'
import ProductCTA from 'src/product-page/ProductCTA'
import theme from 'src/ui/theme'
import { isOdd, toCurrency } from 'utils/helpers'

const ProductPreview = ({ product, index }) => {
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.values.md}px)`)
  const [value, setValue] = useState(1)
  const handleChange = ({ target }) => setValue(target.value)

  const [variant] = product.variants || [{}]

  return (
    <Grid justify="center" container>
      <Img
        className="responsive"
        hideSpinner
        css={{
          zIndex: -1,
          position: 'absolute',
          marginTop: 40,
          transition: 'all .6s',
        }}
        src={`/static/images/products/${product.path}-bg.png`}
        alt="decorative"
      />
      <Grid item xs={12} md={6} css={{ textAlign: 'center' }}>
        <Link
          href={product.slug ? `/produto/${product.slug}` : `/${product.path}`}
          title={product.name}
        >
          <Img
            className="responsive"
            css={{ width: 520, marginTop: theme.spacing(4) }}
            src={`/static/images/products/${product.path}.png`}
            alt={product.name}
          />
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          order: isOdd(index) && matches ? -1 : 0,
        }}
      >
        <Paper
          elevation={3}
          css={{
            backgroundColor: 'rgba(255, 255, 255, .9)',
            padding: theme.spacing(4),
          }}
        >
          <Typography variant="h3" css={{ marginBottom: theme.spacing() }}>
            {product.fullName || product.name}
          </Typography>
          <Typography variant="h4">{toCurrency(variant.price || 0)}</Typography>
          <MdContent
            css={{
              marginTop: theme.spacing(3),
              marginBottom: theme.spacing(2),
              fontWeight: 400,
              color: theme.palette.text.hint,
            }}
            className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary"
            content={product.subtitle}
          />
          <p>
            <Link href={`/produto/${product.slug}`}>Saiba mais</Link>
          </p>
          <Box display="flex">
            <FormControl css={{ marginRight: 4 }} variant="outlined">
              <Select value={value} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                  <MenuItem key={n} value={n}>
                    {n}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <ProductCTA size="large" quantity={value} product={product} />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ProductPreview
