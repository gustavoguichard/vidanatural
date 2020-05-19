import { Typography } from '@material-ui/core'

import theme from 'lib/theme'
import staticProps from 'lib/static-props/produtos'

import Hero from 'components/hero'
import Layout from 'components/layout'
import ProductPreview from 'components/product-preview'

const ProductsPage = ({ products }) => (
  <Layout title="Conheça nossos produtos">
    <Hero size="small" background="/static/images/plants.jpg">
      <Typography variant="h2">Produtos</Typography>
      <Typography variant="body1" css={{ margin: theme.spacing(3) }}>
        <strong>Naturais</strong> de <strong>Verdade</strong>, de alta{' '}
        <strong>eficiência</strong>, para necessidades básicas{' '}
        <strong>diárias</strong>.
      </Typography>
    </Hero>
    {products.map((product, index) => (
      <ProductPreview key={index} index={index} product={product} />
    ))}
  </Layout>
)

export const getStaticProps = staticProps
export default ProductsPage
