import {
  Card,
  CardActionArea,
  // CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'

import api from 'lib/api'
import theme from 'lib/theme'

import Link from 'components/link'
import DiscountTag from 'components/products/discount-tag'
import PriceTag from 'components/products/price-tag'

const ProductPreview = ({ product }) => {
  const [variant] = product.variants || [{}]
  const [image] = product.images

  return (
    <Card square elevation={0} css={{ display: 'flex' }}>
      <Link
        css={{ color: 'inherit', '&:hover': { textDecoration: 'none' } }}
        href="/produtos/[slug]"
        as={`/produtos/${product.slug}`}
      >
        <CardActionArea css={{ height: '100%' }}>
          <CardMedia
            component="img"
            alt={product.name}
            height="250"
            image={api.vnda.getResizedImg(image.url, 600)}
            title={product.name}
          />
          <CardContent>
            <DiscountTag small product={product} />

            <Typography
              gutterBottom
              variant="body1"
              component="h2"
              css={{ fontSize: '1rem' }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              css={{ color: theme.palette.text.hint }}
              dangerouslySetInnerHTML={{ __html: product.description.featured }}
            />
            <PriceTag lineBreak={false} item={variant} css={{ margin: 0 }} />
            {product.inStock ? null : (
              <Typography
                variant="caption"
                css={{
                  textTransform: 'uppercase',
                  color: theme.palette.text.hint,
                }}
              >
                Sem estoque
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default ProductPreview
