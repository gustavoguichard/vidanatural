// import { useContext, useEffect } from 'react'
// import { useInView } from 'react-intersection-observer'
import { Box, Container, Typography } from '@material-ui/core'
import NextLink from 'next/link'
import theme from 'src/ui/theme'
import Link from 'src/components/Link'
import SocialList from 'src/components/SocialList'
// import { usePrevious } from 'utils/hooks'
// import { useIsMobile } from 'utils/responsive'
// import { Context } from 'utils/CustomerChat'
import sloganImg from 'static/svgs/slogan.svg'

const Slogan = ({ variant }) => (
  <NextLink href="/eu-uso-cosmetica-consciente">
    <a title="Ir para a homepage">
      <img
        css={{
          width: 150,
          margin: theme.spacing(),
          transition: 'all .3s',
          filter: variant === 'primary' ? 'invert(0.95)' : null,
        }}
        src={sloganImg}
        alt="Vida Natural"
      />
    </a>
  </NextLink>
)

const year = new Date().getFullYear()

const Footer = ({ variant = 'primary' }) => {
  const primary = variant === 'primary'
  // const chat = useContext(Context)
  // const isMobile = useIsMobile()
  // const [ref, visible] = useInView({
  //   threshold: 0,
  //   triggerOnce: true,
  // })
  // const wasVisible = usePrevious(visible)
  // useEffect(() => {
  //   !isMobile && wasVisible === false && visible && chat.initConversation()
  // }, [visible])
  const color = theme.palette[variant].contrastText
  return (
    <Box
      id="contato"
      pb={2}
      pt={3}
      bgcolor={primary ? 'primary.dark' : 'background.default'}
      color={color}
    >
      <Container
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          [theme.breakpoints.down('xs')]: { justifyContent: 'center' },
        }}
      >
        <Slogan variant={variant} />
        <SocialList color={color} />
        <Box flex={1} ml={2} css={{ minWidth: '60%' }}>
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
