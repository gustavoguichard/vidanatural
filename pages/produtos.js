import find from 'lodash/find'
import { Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import ProductPreview from 'src/produtos/ProductPreview'
import theme from 'src/ui/theme'
import localProducts from 'data/products'
import api from 'utils/api'

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

ProductsPage.getInitialProps = async () => {
  const serverData = await api.search()
  const products = localProducts.map(p => {
    const data = find(serverData, servP => p.slug.startsWith(servP.slug))
    return { ...p, ...data }
  })
  return { products }
}

export default ProductsPage
