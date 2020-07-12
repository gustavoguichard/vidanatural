import { FaWhatsapp } from 'react-icons/fa'
import { Box, Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Breadcrumbs from 'components/breadcrumbs'
import Form from 'components/form'
import Hero from 'components/hero'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'

import sloganImg from 'public/static/svgs/euconecto.svg'

const Page = () => (
  <Layout title="Entre em contato">
    <Hero size="small" background="/static/images/banner.jpg">
      <Box mb={2} p={3}>
        <img
          css={{
            maxWidth: 600,
            width: '80vw',
          }}
          src={sloganImg}
          alt="Eu conecto | cosmética consciente"
        />
      </Box>
    </Hero>
    <PaperContent>
      <Grid container justify="space-between">
        <Grid item xs={12} md={7}>
          <Breadcrumbs css={{ margin: theme.spacing(-3, 0, 3) }}>
            Entre em contato
          </Breadcrumbs>
          <Typography variant="h3">Queremos ouvir você!</Typography>
          <Typography variant="body1" css={{ margin: theme.spacing(2, 0, 4) }}>
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
              <strong>Endereço</strong>
              <br />
              Manoel Petronilho da Silveira, 451
              <br />
              São João do Rio Vermelho, Florianópolis / SC
              <br />
              88060-100
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
