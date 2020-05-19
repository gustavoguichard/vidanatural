import { FaWhatsapp } from 'react-icons/fa'
import { Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Form from 'components/form'
import Hero from 'components/hero'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'

const Page = () => (
  <Layout title="Entre em contato">
    <Hero size="small" background="/static/images/banner.jpg">
      <Typography variant="h2">Entre em contato</Typography>
    </Hero>
    <PaperContent>
      <Grid container justify="space-between">
        <Grid item xs={12} md={7}>
          <Typography variant="h3">Envie-nos uma mensagem</Typography>
          <Typography
            variant="body1"
            css={{
              marginTop: theme.spacing(4),
              marginBottom: theme.spacing(4),
            }}
          >
            Estamos abertos a ouvir qualquer sugestão, reclamação ou um oizinho.
            <br />
            Nós retornaremos o contato assim que possível.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid item xs={12} md={7} css={{ marginBottom: theme.spacing(4) }}>
          <Form />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography component="div" variant="body2">
            <p>
              <strong>Nossa sede</strong>
              <br />
              Antolino E. Martins, 106
              <br />
              Vila Esperança, Imbituba / SC
              <br />
              88780-000
            </p>
            <p>
              <strong>Ligue ou envie uma mensagem</strong>
              <br />
              <a
                css={{
                  position: 'relative',
                  bottom: -2,
                  color: theme.palette.secondary.main,
                }}
                href="https://wa.me/5548991039557"
                title="Enviar mensagem de whatsapp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaWhatsapp />
              </a>{' '}
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

export default Page
