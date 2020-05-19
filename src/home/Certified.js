import { Box, Container, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Certifications from 'components/certifications'
import CTAButton from 'components/cta-button'

const Certified = () => (
  <Box
    css={{
      position: 'relative',
    }}
    pt={1}
    pb={6}
  >
    <Container>
      <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
      <Typography variant="h2">Transparência</Typography>
      <Typography
        variant="body1"
        component="div"
        css={{
          marginTop: theme.spacing(2),
        }}
      >
        <p css={{ maxWidth: 800 }}>
          Somos fiscalizados e registrados pela ANVISA, mas ao mesmo tempo
          seguimos com um processo de produção artesanal.
          <br />
          Todo o nosso esforço e cuidado está voltado para uma produção livre de
          químicos danosos, com o mínimo de impacto ambiental, vegana, sem
          crueldade ou testes em animais.
          <br />
          Só usamos ingredientes seguros para o corpo e para o planeta.
        </p>
      </Typography>
      <CTAButton href="/sobre-a-vida-natural" center={false}>
        Saiba mais
      </CTAButton>
    </Container>
  </Box>
)

export default Certified
