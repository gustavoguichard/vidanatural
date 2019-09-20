import { Box, Container, Grid, Typography } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import BackgroundImg from 'src/components/BackgroundImg'
import Img from 'src/components/Img'
import theme from 'src/ui/theme'

const Icon = ({ path, title, size = 100 }) => (
  <Img
    css={{ margin: 10 }}
    width={size}
    src={require(`../../static/svgs/${path}.svg`)}
    alt={title}
    title={title}
  />
)

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
          <Box
            display="flex"
            justifyContent="space-around"
            flexWrap="wrap"
            mt={5}
          >
            <Icon title="Certificados pela ANVISA" path="anvisa" size={90} />
            <Icon
              title="Investimos na compensação ambiental das embalagens que produzimos"
              path="eureciclo"
            />
            <Icon
              title="Livre de parabenos e outros absurdos sintéticos"
              path="parabenos"
            />
            <Icon title="Produtos artesanais" path="artesanal" />
            <Icon title="Livres de crueldade animal" path="cruelty-free" />
            <Icon title="Sem fragrâncias sintéticas" path="fragrancias" />
          </Box>
        </Container>
      </Box>
    </Grid>
  </Grid>
)

export default Certified
