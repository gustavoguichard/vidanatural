import map from 'lodash/map'
import { Box, Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Hero from 'components/hero'
import Img from 'components/img'
import Layout from 'components/layout'
import Link from 'components/link'
import PaperContent from 'components/paper-content'
import StatePannel from 'components/state-pannel'

import parsedClients from 'data/parsed-clients'
import sloganImg from 'public/static/svgs/euquero.svg'

const OndeEncontrar = () => (
  <Layout title="Onde encontrar">
    <Hero size="small" background="/static/images/onde-encontrar.jpg">
      <Box mb={2} p={3}>
        <img
          css={{
            maxWidth: 600,
            width: '80vw',
          }}
          src={sloganImg}
          alt="Eu quero | cosmética consciente"
        />
      </Box>
    </Hero>
    <PaperContent>
      <Grid container justify="space-between">
        <Grid item xs={12} md={8}>
          <Typography variant="h3">
            Procure pelo estado na lista abaixo
          </Typography>
          <Typography
            variant="body1"
            component="div"
            css={{
              marginTop: theme.spacing(4),
              marginBottom: theme.spacing(4),
            }}
          >
            <p>
              Nós preparamos uma listagem de todas as lojas e distribuidores de
              nossos produtos no Brasil. Fique ligade, esta página será
              atualizada constantemente.
            </p>
            <p>
              Se não achar um distribuidor na sua cidade/região, você pode{' '}
              <Link href="/produtos">comprar aqui</Link>.
            </p>
            <p>
              Caso queira distribuir nossos produtos em sua região,{' '}
              <Link href="/entre-em-contato">entre em contato</Link> conosco,
              vamos fazer acontecer!
            </p>
          </Typography>
          {map(parsedClients, (region, state) => (
            <StatePannel title={state} region={region} key={state} />
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          css={{ display: 'flex', justifyContent: 'center' }}
        >
          <Img
            css={{ maxWidth: '100%', width: 300 }}
            src="/static/svgs/where-to-find.svg"
            alt="Onde encontrar"
          />
        </Grid>
      </Grid>
    </PaperContent>
  </Layout>
)

export default OndeEncontrar
