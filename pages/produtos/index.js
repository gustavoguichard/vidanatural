import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import map from 'lodash/map'
import { Box, Button, Container, Grid } from '@material-ui/core'

import theme from 'lib/theme'
import staticProps from 'lib/static-props/produtos'

import Breadcrumbs from 'components/breadcrumbs'
import { Scroller } from 'components/scroller'
import Layout from 'components/layout'
import ProductCard from 'components/product-card'

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

  return (
    <Layout stickBar title="Conheça nossos produtos">
      <Container css={{ marginTop: theme.spacing(9) }} maxWidth="md">
        <Breadcrumbs>Produtos</Breadcrumbs>
        <Box mb={3} display="flex" justifyContent="center">
          <Scroller flex css={{ width: 'auto' }}>
            {map(filters, (filter) => (
              <Button
                onClick={setFilter(filter.name)}
                color={filter.name === selected ? 'secondary' : 'primary'}
                css={{ margin: theme.spacing() }}
                key={filter.name}
              >
                {filter.title}
              </Button>
            ))}
          </Scroller>
        </Box>
        <Grid container spacing={2} css={{ alignItems: 'stretch' }}>
          {filteredProducts(products, selected).map((product, index) => (
            <Grid
              md={4}
              sm={6}
              item
              key={index}
              css={{ alignItems: 'stretch', display: 'flex' }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export const getStaticProps = staticProps
export default ProductsPage
