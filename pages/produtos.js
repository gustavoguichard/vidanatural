import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import get from 'lodash/get'
import map from 'lodash/map'

import staticProps from 'lib/static-props/produtos'

import EcommerceLayout from 'layouts/ecommerce'
import Breadcrumbs from 'components/breadcrumbs'
import Scroller from 'components/scroller'
import ProductGrid from 'components/product-grid'
import SEO from 'components/seo'

const filteredProducts = (products, filter) => {
  switch (filter) {
    case null:
    case undefined:
      return products
    case 'promocoes':
      return products.filter((p) => p.on_sale)
    default:
      return products.filter((p) => p.tag_names.includes(filter))
  }
}

const ProductsPage = ({ products, filters }) => {
  const router = useRouter()

  const [selected, setSelected] = useState(router.query.filter)
  const select = (filter) => {
    setSelected(filter === selected ? null : filter)
  }

  const setFilter = (filter) => () => {
    const query = filter === selected ? null : { filter }
    router.push({ pathname: '/produtos', query })
  }

  useEffect(() => {
    select(router.query.filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.filter])

  useEffect(() => {
    setSelected(router.query.filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const links = selected
    ? [{ title: 'Produtos', href: '/produtos' }]
    : undefined
  const currentFilter = filters.find((f) => f.name === selected)

  return (
    <div className="max-w-screen-xl px-6 m-auto mt-16">
      <SEO title="Conheça nossos produtos" />
      <Breadcrumbs links={links} className="m-4">
        {get(currentFilter, 'title', 'Produtos')}
      </Breadcrumbs>
      <div className="flex justify-center mx-2 mb-6">
        <Scroller flex>
          {map(filters, (filter, idx) => (
            <button
              key={filter.name + idx}
              type="button"
              className={`m-1 uppercase bg-gray-100 hover:bg-gray-200 rounded text-sm px-2 py-1 text-${
                filter.name === selected ? 'teal-600' : 'teal-900'
              }`}
              onClick={setFilter(filter.name)}
            >
              {filter.title}
            </button>
          ))}
        </Scroller>
      </div>
      <ProductGrid products={filteredProducts(products, selected)} />
    </div>
  )
}

ProductsPage.getLayout = EcommerceLayout

export const getStaticProps = staticProps
export default ProductsPage
