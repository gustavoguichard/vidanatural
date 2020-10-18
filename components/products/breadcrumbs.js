import { getCategoryTags } from 'lib/domain'

import Breadcrumbs from 'components/breadcrumbs'

const ProductBreadcrumbs = ({ product = {} }) => {
  const [category] = getCategoryTags([product], false)
  const categoryLink = category
    ? [{ title: category.title, href: `/produtos?filter=${category.name}` }]
    : []

  return (
    <Breadcrumbs
      className="md:px-4"
      links={[{ title: 'Produtos', href: '/produtos' }, ...categoryLink]}
    >
      {product.name || 'Carregando...'}
    </Breadcrumbs>
  )
}

export default ProductBreadcrumbs
