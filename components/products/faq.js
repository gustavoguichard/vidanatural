import get from 'lodash/get'
import { Container, Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import FaqItem from 'components/faq-item'

const ProductFaq = ({ items }) => {
  return get(items, 'length') ? (
    <Container id="faq" css={{ padding: theme.spacing(3, 3) }}>
      <Grid css={{ padding: 0 }} container justify="center" spacing={3}>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h3"
            css={{
              margin: theme.spacing(6, 0, 3),
              textAlign: 'center',
            }}
          >
            Dúvidas frequentes
          </Typography>
          {items.map((item) => (
            <FaqItem key={`item-${item.id}`} {...item} />
          ))}
        </Grid>
      </Grid>
    </Container>
  ) : null
}

export default ProductFaq