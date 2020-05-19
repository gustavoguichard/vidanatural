import theme from 'lib/theme'

import Breadcrumbs from 'components/breadcrumbs'

const ProductBreadcrumbs = ({ product = {}, isMobile }) => {
  return (
    <Breadcrumbs
      css={isMobile ? {} : { padding: theme.spacing(0, 2) }}
      links={[{ title: 'Produtos', href: '/produtos' }]}
    >
      {product.name}
    </Breadcrumbs>
  )
}

export default ProductBreadcrumbs
