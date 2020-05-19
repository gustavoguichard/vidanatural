import find from 'lodash/find'
import { Typography } from '@material-ui/core'

import api from 'lib/api'
import theme from 'lib/theme'

import Hero from 'components/hero'
import Layout from 'components/layout'
import ProductPreview from 'components/product-preview'

import localProducts from 'data/products'

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

export async function getStaticProps() {
  const serverData = await api.vnda.search()
  const products = localProducts.map((p) => {
    const data = find(serverData, (servP) => p.slug.startsWith(servP.slug))
    return { ...data, ...p }
  })
  return { props: { products } }
}

export default ProductsPage
