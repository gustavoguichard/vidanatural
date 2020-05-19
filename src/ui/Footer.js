import { Box, Container, Grid, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import FooterMenu from 'src/ui/footer/FooterMenu'
import NewsForm from 'src/ui/footer/NewsForm'
import SocialList from 'src/ui/footer/SocialList'

const year = new Date().getFullYear()

const Footer = () => {
  const color = theme.palette.primary.contrastText
  return (
    <Box
      id="contato"
      css={{
        color,
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(8),
        backgroundColor: theme.palette.primary.dark,
        fontSize: '1.1rem',
        a: {
          color: 'inherit',
          textDecoration: 'underline',
          '&:hover': { color: theme.palette.secondary.main },
        },
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            css={{ marginBottom: theme.spacing(3) }}
          >
            <FooterMenu />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={5}
            css={{
              marginBottom: theme.spacing(3),
              [theme.breakpoints.down('xs')]: { order: -1 },
            }}
          >
            <NewsForm />
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
            css={{ marginBottom: theme.spacing(), marginTop: -theme.spacing() }}
          >
            <SocialList color={color} />
          </Grid>
        </Grid>
        <Typography variant="body2" color="inherit">
          Vida Natural&reg; {year} • Imbituba / SC
          <br />
          <a
            css={{ color: 'inherit' }}
            href="mailto:falecom@vidanatural.eco.br"
          >
            falecom@vidanatural.eco.br
          </a>{' '}
          | CNPJ: 24.288.982/0001-27
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
