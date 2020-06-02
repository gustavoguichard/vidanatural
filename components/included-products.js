import { List, Paper, Typography } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'

import theme from 'lib/theme'

import SearchItem from 'components/header/search-item'

const RelatedProducts = ({ products }) => {
  return isEmpty(products) ? null : (
    <Paper css={{ margin: theme.spacing(4, 0) }}>
      <List>
        <Typography
          variant="h3"
          css={{
            textAlign: 'center',
            margin: theme.spacing(2, 0),
          }}
        >
          Produtos incluídos
        </Typography>
        {products.map((product, index) => (
          <SearchItem key={`c-item-${index}`} {...product} />
        ))}
      </List>
    </Paper>
  )
}

export default RelatedProducts
