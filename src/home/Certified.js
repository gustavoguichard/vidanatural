import { Box, Container, Grid, Typography } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import BackgroundImg from 'src/components/BackgroundImg'
import Certifications from 'src/components/Certifications'
import Img from 'src/components/Img'
import theme from 'src/ui/theme'

const Certified = ({ isMobile }) => (
  <Grid container>
    <Grid
      item
      xs={12}
      md={6}
      sm={3}
      css={{ position: 'relative', minHeight: 300 }}
    >
      <BackgroundImg src="/static/images/transparency.jpg" />
    </Grid>
    <Grid item sm={9} md={6} xs={12}>
      <Box
        css={{
          backgroundColor: theme.palette.common.black,
          color: theme.palette.text.secondary,
          position: 'relative',
        }}
        py={isMobile ? 10 : 14}
      >
        <Container maxWidth="xs">
          <Typography variant="h2">Transparência</Typography>
          <Typography
            variant="body1"
            component="div"
            css={{
              marginTop: theme.spacing(5),
              marginBottom: theme.spacing(3),
            }}
          >
            <p>
              Somos fiscalizados e registrados pela ANVISA, mas ao mesmo tempo
              seguimos com um processo de produção artesanal.
            </p>
            <p>
              Todo o nosso esforço e cuidado está voltado para uma produção
              livre de químicos danosos, com o mínimo de impacto ambiental,
              vegana, sem crueldade ou testes em animais.
            </p>
            <p>Só usamos ingredientes seguros para o corpo e para o planeta.</p>
          </Typography>
          <CTAButton
            href="/sobre-a-vida-natural"
            center={false}
            color="inherit"
          >
            Saiba mais
          </CTAButton>
          <Certifications />
        </Container>
      </Box>
    </Grid>
  </Grid>
)

export default Certified
