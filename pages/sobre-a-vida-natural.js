import { Paper, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import PaperContent from 'src/ui/PaperContent'

export default function Index() {
  return (
    <Layout>
      <Hero size="small" background="/static/images/capa-pb.jpg">
        <Typography variant="h2">Sobre a Vida Natural</Typography>
      </Hero>
      <PaperContent />
    </Layout>
  )
}
