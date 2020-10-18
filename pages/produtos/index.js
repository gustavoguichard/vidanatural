import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import get from 'lodash/get'
import map from 'lodash/map'

import staticProps from 'lib/static-props/produtos'

import Breadcrumbs from 'components/breadcrumbs'
import Scroller from 'components/scroller'
import Layout from 'components/layout'
import ProductGrid from 'components/product-grid'

const filteredProducts = (products, filter) => {
  switch (filter) {
    case null:
    case undefined:
      return products
    case 'promocoes':
      return products.filter((p) => p.on_sale)
    default:
      return products.filter((p) => {
        const tags = map(p.tags, 'name')
        return tags.includes(filter)
      })
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
  }, [router.query.filter])

  useEffect(() => {
    setSelected(router.query.filter)
  }, [])

  const links = selected
    ? [{ title: 'Produtos', href: '/produtos' }]
    : undefined
  const currentFilter = filters.find((f) => f.name === selected)

  return (
    <Layout stickBar title="Conheça nossos produtos">
      <div className="max-w-screen-xl px-6 m-auto mt-16">
        <Breadcrumbs links={links} className="m-4">
          {get(currentFilter, 'title', 'Produtos')}
        </Breadcrumbs>
        <div className="flex justify-center mx-2 mb-6">
          <Scroller flex>
            {map(filters, (filter, idx) => (
              <button
                key={filter.name + idx}
                type="button"
                className={`m-1 uppercase bg-opacity-25 hover:bg-opacity-50 bg-gray-300 rounded text-sm px-2 py-1 text-${
                  filter.name === selected ? 'green-500' : 'green-900'
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
    </Layout>
  )
}

export const getStaticProps = staticProps
export default ProductsPage
