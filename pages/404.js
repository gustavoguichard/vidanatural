import { Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Link from 'src/components/Link'
import Hero from 'src/components/Hero'
import theme from 'lib/theme'

const Page = () => (
  <Layout title="404 - Página não encontrada">
    <Hero size="full" background="/static/images/capa-pb.jpg">
      <Typography variant="h2">404 - Página não encontrada</Typography>
      <Typography css={{ marginTop: theme.spacing(4) }} variant="body1">
        Procure outra página no nosso menu.
        <br />
        <Link href="/">Voltar para a Homepage</Link>
      </Typography>
    </Hero>
  </Layout>
)

export default Page
