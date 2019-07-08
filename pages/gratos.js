import { Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Link from 'src/components/Link'
import Hero from 'src/components/Hero'
import theme from 'src/ui/theme'

const Page = () => (
  <Layout>
    <Hero size="full" background="/static/images/capa-pb.jpg">
      <Typography variant="h2">Agradecemos pelo contato!</Typography>
      <Typography css={{ marginTop: theme.spacing(4) }} variant="body1">
        Retornaremos assim que possível.{' '}
        <Link href="/">Voltar para a Homepage</Link>
      </Typography>
    </Hero>
  </Layout>
)

export default Page
