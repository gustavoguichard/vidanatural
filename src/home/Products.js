import Link from 'src/components/Link'
import {
  Card,
  Button,
  Paper,
  Container,
  Typography,
  Box,
} from '@material-ui/core'
import PaperContent from 'src/ui/PaperContent'
import theme from 'src/ui/theme'
import Emoji from 'src/components/Emoji'
import BackgroundImg from 'src/components/BackgroundImg'
import products from 'data/products'

const Product = ({ name, showHome, path, tone, size }) =>
  showHome ? (
    <Link href={path}>
      <Card
        className="product-card"
        elevation={10}
        css={{
          alignItems: 'center',
          backgroundColor: `${theme.palette.secondary.light} !important`,
          display: 'flex',
          justifyContent: 'center',
          margin: theme.spacing(2),
          minHeight: 300,
          minWidth: 300,
          padding: theme.spacing(2),
          position: 'relative',
          filter: 'saturate(.8)',
          transition: 'all .3s',
          '&:hover': {
            backgroundColor: `${tone} !important`,
            filter: 'saturate(1.2)',
          },
        }}
      >
        <img src={`/static/images/products/small/${path}.png`} alt={name} />
        <img
          css={{
            pointerEvents: 'none',
            transition: 'all 1s ease-in-out',
            position: 'absolute',
            '.product-card:hover &': {
              transform: 'none',
            },
            transform: 'translate(-80px, -100px)',
            top: 0,
            left: -20,
          }}
          src={`/static/images/plants/top-left.png`}
          role="presentation"
        />
        <img
          css={{
            pointerEvents: 'none',
            transition: 'all 1s ease-in-out',
            position: 'absolute',
            '.product-card:hover &': {
              transform: 'none',
            },
            transform: 'translate(80px, -100px)',
            top: 0,
            right: 0,
          }}
          src={`/static/images/plants/top-right.png`}
          role="presentation"
        />
        <img
          css={{
            pointerEvents: 'none',
            transition: 'all 1s ease-in-out',
            position: 'absolute',
            '.product-card:hover &': {
              transform: 'none',
            },
            transform: 'translate(-80px, 100px)',
            bottom: 0,
            left: 0,
          }}
          src={`/static/images/plants/bottom-left.png`}
          role="presentation"
        />
        <img
          css={{
            pointerEvents: 'none',
            transition: 'all 1s ease-in-out',
            position: 'absolute',
            '.product-card:hover &': {
              transform: 'none',
            },
            transform: 'translate(80px, 100px)',
            bottom: 0,
            right: 0,
          }}
          src={`/static/images/plants/bottom-right.png`}
          role="presentation"
        />
      </Card>
    </Link>
  ) : null

const Products = () => {
  return (
    <PaperContent>
      <Box textAlign="center" mb={2}>
        <Container maxWidth="md">
          <Typography variant="h4">
            <strong>
              Não basta ser natural e sustentável,
              <br />
              tem que ser eficiente <Emoji symbol="😉" label="piscada" />
            </strong>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="body1">
              Nossos cosméticos são feitos a mão, produzidos em pequenos lotes,
              com ingredientes naturais, biodegradáveis e sustentáveis, com
              fórmulas minimalistas e livre de crueldade contra animais.
            </Typography>
          </Container>
        </Container>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {products.map(product => (
          <Product key={product.path} {...product} />
        ))}
      </Box>
    </PaperContent>
  )
}

export default Products
