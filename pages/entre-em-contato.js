import { Button, Grid, Paper, Typography, TextField } from '@material-ui/core'
import { FaWhatsapp } from 'react-icons/fa'
import Layout from 'src/ui/Layout'
import Link from 'src/components/Link'
import Hero from 'src/components/Hero'
import theme from 'src/ui/theme'
import PaperContent from 'src/ui/PaperContent'

const Input = props => (
  <TextField
    {...props}
    css={{ marginBottom: theme.spacing(2) }}
    variant="outlined"
    fullWidth
  />
)

export default function Index() {
  return (
    <Layout>
      <Hero size="small" background="/static/images/capa-pb.jpg">
        <Typography variant="h2">Entre em contato</Typography>
      </Hero>
      <PaperContent>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography variant="h3">Envie-nos uma mensagem</Typography>
            <Typography
              variant="body1"
              css={{
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(4),
              }}
            >
              Estamos abertos a ouvir qualquer sugestão, reclamação ou um
              oizinho.
              <br />
              Nós retornaremos o contato assim que possível.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Grid item xs={12} md={7} css={{ marginBottom: theme.spacing(4) }}>
            <form name="contact" method="POST" data-netilify="true">
              <Input id="name" required label="Seu nome" />
              <Input required type="email" id="email" label="Seu e-mail" />
              <Input id="phone" label="Seu telefone / whatsapp" />
              <Input
                id="message"
                multiline
                required
                rows="4"
                label="Mensagem"
              />
              <Button type="submit" variant="contained" color="secondary">
                Enviar mensagem
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography component="div" variant="body2">
              <p>
                <strong>Nossa sede</strong>
                <br />
                Antolino E. martins, 106
                <br />
                Vila Esperança, Imbituba / SC
                <br />
                88780-000
              </p>
              <p>
                <strong>Ligue ou envie uma mensagem</strong>
                <br />
                <Link
                  css={{ position: 'relative', bottom: -2 }}
                  href="https://wa.me/5548991039557"
                  title="Enviar mensagem de whatsapp"
                  target="blank"
                >
                  <FaWhatsapp />
                </Link>{' '}
                +55 (48) 99103-9557
              </p>
              <p>
                <strong>Informações da Empresa</strong>
                <br />
                Vida Natural Cosmética Consciente LTDA
                <br />
                CNPJ: 24.288.982/0001-27
                <br />
                Responsável Técnico CRQ 1330293
                <br />
                Res ANVISA Nº 343/05
                <br />
                AFE Nº 4.00.537-0
              </p>
            </Typography>
          </Grid>
        </Grid>
      </PaperContent>
    </Layout>
  )
}
