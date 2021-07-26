import { cx } from 'lib/utils'
import { getCategoryTags } from 'lib/domain'

import Breadcrumbs from 'components/breadcrumbs'

const ProductBreadcrumbs = ({ product = {}, className }) => {
  const [category] = getCategoryTags([product], false)
  const categoryLink = category
    ? [{ title: category.title, href: `/produtos?filter=${category.name}` }]
    : []

  return (
    <Breadcrumbs
      className={cx('lg:px-4', className)}
      links={[{ title: 'Produtos', href: '/produtos' }, ...categoryLink]}
    >
      {product.name || 'Carregando...'}
    </Breadcrumbs>
  )
}

export default ProductBreadcrumbs
