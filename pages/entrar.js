import { Container, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Hero from 'components/hero'
import Layout from 'src/ui/Layout'

const Page = () => (
  <Layout title="Log in">
    <Hero size="small" background="/static/images/plants.jpg">
      <Typography variant="h2">Fazer Login</Typography>
      <Typography variant="body1" css={{ margin: theme.spacing(3) }}>
        <strong>Ou crie sua conta</strong>.
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
