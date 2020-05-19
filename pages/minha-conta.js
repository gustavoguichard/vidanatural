import { Container, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import theme from 'lib/theme'

const Page = () => (
  <Layout title="Meus pedidos">
    <Hero size="small" background="/static/images/plants.jpg">
      <Typography variant="h2">Meus Pedidos</Typography>
      <Typography variant="body1" css={{ margin: theme.spacing(3) }}>
        <strong>Alterar informações</strong>.
      </Typography>
    </Hero>
    <Container
      maxWidth="lg"
      css={{
        borderBottom: '10px solid white',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    />
  </Layout>
)

export default Page
