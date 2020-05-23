import theme from 'lib/theme'
import { getCategoryTags } from 'lib/domain'

import Breadcrumbs from 'components/breadcrumbs'

const ProductBreadcrumbs = ({ product = {}, isMobile }) => {
  const [category] = getCategoryTags([product], false)
  const categoryLink = category
    ? [{ title: category.title, href: `/produtos?filter=${category.name}` }]
    : []

  return (
    <Breadcrumbs
      css={isMobile ? {} : { padding: theme.spacing(0, 2) }}
      links={[{ title: 'Produtos', href: '/produtos' }, ...categoryLink]}
    >
      {product.name || 'Carregando...'}
    </Breadcrumbs>
  )
}

export default ProductBreadcrumbs
