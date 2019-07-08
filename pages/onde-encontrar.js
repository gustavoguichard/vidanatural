import { Button, Grid, Paper, Typography, TextField } from '@material-ui/core'
import { FaWhatsapp } from 'react-icons/fa'
import Layout from 'src/ui/Layout'
import Link from 'src/components/Link'
import Img from 'src/components/Img'
import Hero from 'src/components/Hero'
import PaperContent from 'src/ui/PaperContent'
import theme from 'src/ui/theme'
import { useChat } from 'utils/hooks'

const Page = () => {
  useChat()
  return (
    <Layout>
      <Hero size="small" background="/static/images/onde-encontrar.jpg">
        <Typography variant="h2">Onde Encontrar</Typography>
      </Hero>
      <PaperContent>
        <Grid container justify="space-between">
          <Grid item xs={12} md={7}>
            <Typography variant="h3">Em breve</Typography>
            <Typography
              variant="body1"
              component="div"
              css={{
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(4),
              }}
            >
              <p>
                Estamos preparando uma listagem de todas as lojas que tem nossos
                produtos no Brasil. Em breve atualizaremos esta página.
              </p>
              <p>
                Enquanto isso,{' '}
                <Link href="/entre-em-contato">entre em contato</Link> conosco
                informando seu endereço e indicaremos a forma mais conveniente
                de adquirir nossos produtos.
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Img
              css={{ maxWidth: '100%' }}
              src="/static/svgs/where-to-find.svg"
              alt="Onde encontrar"
            />
          </Grid>
        </Grid>
      </PaperContent>
    </Layout>
  )
}

export default Page
