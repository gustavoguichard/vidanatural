import { Box, Container, Typography } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import theme from 'src/ui/theme'

import anvisa from 'static/svgs/anvisa.svg'
import vegan from 'static/svgs/vegan.svg'
import rabbit from 'static/svgs/rabbit.svg'
import transgenic from 'static/svgs/transgenic.svg'
import hazard from 'static/svgs/hazard.svg'

const About = ({ isMobile }) => (
  <Box
    css={{
      backgroundColor: theme.palette.common.black,
      color: theme.palette.text.secondary,
    }}
    py={isMobile ? 7 : 10}
  >
    <Container
      maxWidth="md"
      css={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography css={{ textAlign: 'center' }} variant="h2">
        Nossa promessa é a transparência
      </Typography>
      <Box css={{ maxWidth: 600 }}>
        <Typography
          variant="body1"
          css={{
            fontWeight: 500,
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(3),
          }}
        >
          <strong>
            Somos humanos, artesãos, cuidamos de toda a cadeia de produção.
          </strong>
          <br />
          Assim, garantimos que nossos produtos são livres de químicos danosos
          ao corpo, veganos, livres de testes em animais, livres de gênero,
          livres de transgênicos.
          <br />
          <br />
          Além disso somos fiscalizados e registrados.
        </Typography>
        <Box
          display="flex"
          css={{ maxWidth: 550 }}
          mb={5}
          justifyContent="space-between"
        >
          <img width={60} src={anvisa} alt="Certificados pela anvisa" />
          <img width={60} src={vegan} alt="Certificados pela anvisa" />
          <img width={60} src={rabbit} alt="Certificados pela anvisa" />
          <img width={60} src={transgenic} alt="Certificados pela anvisa" />
          <img width={60} src={hazard} alt="Certificados pela anvisa" />
        </Box>
        <CTAButton href="/sobre-a-vida-natural" center={false} color="inherit">
          Saiba mais
        </CTAButton>
      </Box>
    </Container>
  </Box>
)

export default About
