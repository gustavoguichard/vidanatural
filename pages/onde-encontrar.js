import { Paper, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import PaperContent from 'src/ui/PaperContent'

export default function Index() {
  return (
    <Layout>
      <Hero size="small" background="/static/images/gota.jpg">
        <Typography variant="h2">Onde Encontrar</Typography>
      </Hero>
      <PaperContent />
    </Layout>
  )
}
