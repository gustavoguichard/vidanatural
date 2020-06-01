import { Box, Container, Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import BackgroundImg from 'components/background-img'
import CTAButton from 'components/cta-button'

const border = '60px solid white'
const Section = ({ title, children, bb, bt, br, bl }) => (
  <Grid item md={7} xs={12}>
    <Box
      py={8}
      px={8}
      css={{
        [theme.breakpoints.up('md')]: {
          borderBottom: bb && border,
          borderTop: bt && border,
          borderLeft: bl && border,
          borderRight: br && border,
        },
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography
        variant="body1"
        component="div"
        css={{ margin: theme.spacing(3, 0, 5), color: theme.palette.text.hint }}
      >
        {children}
      </Typography>
    </Box>
  </Grid>
)

const Image = ({ src, order = 0 }) => (
  <Grid
    item
    xs={12}
    md={5}
    css={{
      position: 'relative',
      minHeight: 300,
      order,
      [theme.breakpoints.down('sm')]: { order: 0 },
    }}
  >
    <BackgroundImg src={src} />
  </Grid>
)

const About = ({ isMobile }) => (
  <Box bgcolor="white" py={6}>
    <Container maxWidth="lg">
      <Grid spacing={0} container css={{ backgroundColor: '#fafafa' }}>
        <Image src="/static/images/afro.jpg" />
        <Section title="Uma ideia, um movimento" bt br>
          <p>
            Nossos cosméticos são feitos a mão, produzidos em pequenos lotes,
            com ingredientes naturais, biodegradáveis e sustentáveis, com
            fórmulas minimalistas e livre de crueldade contra animais.
          </p>
          <p>
            Com nossos cosméticos queremos incentivar um movimento para
            desconstruir ideias, propor mudanças no comportamento e nos valores
            para favorecer um consumo + simples + consciente e em maior
            equilíbrio com a saúde do seu corpo e do meio ambiente.
          </p>
        </Section>
        <Image order={1} src="/static/images/folhas.jpg" />
        <Section title="Produtos de alta qualidade" bb bl>
          <p>
            Queremos que vc possa usar no seu dia a dia produtos naturais,
            sustentáveis e altamente eficientes!
          </p>
          <p>Acreditamos no poder desse movimento! Vamos junt@s?</p>
          <CTAButton href="/sobre-a-vida-natural" center={false}>
            Saiba mais
          </CTAButton>
        </Section>
      </Grid>
    </Container>
  </Box>
)

export default About
