import { Box, Container, Grid, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Img from 'src/components/Img'
import FaqItem from 'src/components/FaqItem'
import theme from 'src/ui/theme'
import * as cms from 'utils/cms'

const FaqPage = ({ items }) => {
  return (
    <Layout variant="secondary" title="Perguntas Frequentes">
      <Container
        maxWidth="lg"
        css={{
          padding: theme.spacing(18, 3, 4),
          borderBottom: '10px solid white',
        }}
      >
        <Grid container justify="center">
          <Grid item xs={12} md={8} css={{ textAlign: 'center' }}>
            <Typography variant="h2">Perguntas Frequentes</Typography>
            <Box py={4} textAlign="left">
              {items.map((item) => (
                <FaqItem key={`item-${item.id}`} {...item} />
              ))}
            </Box>
            <Img
              css={{
                maxWidth: '100%',
                width: 250,
                margin: theme.spacing(4, 0),
              }}
              src="/static/svgs/faq.svg"
              alt="Perguntas frequentes"
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const items = await cms.allByTypeAndTags('faq_item', ['institucional'])
  return { props: { items } }
}

export default FaqPage
