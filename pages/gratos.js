import { Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Hero from 'components/hero'
import Layout from 'src/ui/Layout'
import Link from 'components/link'

const Page = () => (
  <Layout title="Gratos pelo contato">
    <Hero size="full" background="/static/images/capa-pb.jpg">
      <Typography variant="h2">Agradecemos pelo contato!</Typography>
      <Typography css={{ marginTop: theme.spacing(4) }} variant="body1">
        Retornaremos assim que possível.
        <br />
        <Link href="/">Voltar para a Homepage</Link>
      </Typography>
    </Hero>
  </Layout>
)

export default Page
