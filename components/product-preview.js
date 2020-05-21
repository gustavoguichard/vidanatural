import ReactMarkdown from 'react-markdown'
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from '@material-ui/core'

import theme from 'lib/theme'
import { isOdd } from 'lib/utils'

import Img from 'components/img'
import Link from 'components/link'
import PriceTag from 'components/products/price-tag'
import ProductCTA from 'components/products/cta'

const ProductPreview = ({ product, index }) => {
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.values.md}px)`)

  const [variant] = product.variants || [{}]

  return (
    <Box
      css={{
        borderBottom: '10px solid white',
        borderTop: index === 0 ? '10px solid white' : null,
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
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
          <Grid
            item
            xs={12}
            md={6}
            css={{ textAlign: 'center', minHeight: 350 }}
          >
            <Link
              href="/produtos/[slug]"
              as={`/produtos/${product.slug}`}
              title={product.title}
            >
              <Img
                className="responsive"
                css={{ width: 520, marginTop: theme.spacing(4) }}
                src={`/static/images/products/${product.path}.png`}
                alt={product.title}
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
              elevation={0}
              css={{
                backgroundColor: 'rgba(255, 255, 255, .9)',
                marginBottom: theme.spacing(4),
                padding: theme.spacing(4),
              }}
            >
              <Link href="/produtos/[slug]" as={`/produtos/${product.slug}`}>
                <Typography
                  variant="h3"
                  css={{ marginBottom: theme.spacing() }}
                >
                  {product.title}
                </Typography>
              </Link>
              <ReactMarkdown
                escapeHtml={false}
                css={{
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                  fontWeight: 600,
                  color: theme.palette.text.hint,
                }}
                className="MuiTypography-root MuiTypography-body1"
                source={product.subtitle}
              />
              <ReactMarkdown
                escapeHtml={false}
                css={{
                  marginTop: theme.spacing(3),
                  marginBottom: theme.spacing(2),
                  fontWeight: 400,
                  color: theme.palette.text.hint,
                }}
                className="MuiTypography-root MuiTypography-body1"
                source={product.presentation}
              />
              <p>
                <Link href="/produtos/[slug]" as={`/produtos/${product.slug}`}>
                  Saiba mais
                </Link>
              </p>
              <PriceTag item={variant} />
              <ProductCTA size="large" product={product} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductPreview
