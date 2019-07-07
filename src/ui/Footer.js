import { Box, Container, Typography } from '@material-ui/core'
import NextLink from 'next/link'
import theme from 'src/ui/theme'
import Link from 'src/components/Link'
import Img from 'src/components/Img'
import SocialList from 'src/components/SocialList'
import logoImg from 'static/svgs/logo.svg'

const year = new Date().getFullYear()

const Footer = ({ variant = 'primary' }) => {
  const primary = variant === 'primary'
  const color = theme.palette[variant].contrastText
  return (
    <Box
      id="contato"
      pb={12}
      pt={10}
      bgcolor={primary ? 'common.black' : 'background.default'}
      color={color}
    >
      <Container
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SocialList color={color} css={{ marginRight: theme.spacing(2) }} />
        <Img
          src={logoImg}
          alt="Vida Natural"
          width={55}
          css={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            [theme.breakpoints.down('xs')]: { display: 'none' },
          }}
        />
        <Box>
          <Typography variant="body2" color="inherit">
            Vida Natural&reg; {year} • Imbituba / SC
            <br />
            <Link
              color={primary ? 'inherit' : 'secondary'}
              href="mailto:falecom@vidanatural.eco.br"
            >
              falecom@vidanatural.eco.br
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
