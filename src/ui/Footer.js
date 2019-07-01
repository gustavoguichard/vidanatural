// import { useContext, useRef, useEffect } from 'react'
import { useRef } from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import NextLink from 'next/link'
import theme from 'src/ui/theme'
import Link from 'src/components/Link'
import SocialList from 'src/components/SocialList'
// import { usePrevious, useOnScreen } from 'utils/hooks'
// import { useIsMobile } from 'utils/responsive'
// import { Context } from 'utils/CustomerChat'
import sloganImg from 'static/images/slogan.svg'

const Slogan = ({ secondary }) => (
  <NextLink href="/eu-uso-cosmetica-consciente">
    <a title="Ir para a homepage">
      <img
        css={{
          width: 150,
          margin: theme.spacing(),
          transition: 'all .3s',
          filter: secondary ? 'invert(0.95)' : null,
        }}
        src={sloganImg}
        alt="Vida Natural"
      />
    </a>
  </NextLink>
)

const Footer = ({ variant = 'secondary' }) => {
  const secondary = variant === 'secondary'
  // const chat = useContext(Context)
  // const isMobile = useIsMobile()
  const ref = useRef()
  // const isOnScreen = useOnScreen(ref, '0px', true)
  // const wasOnScreen = usePrevious(isOnScreen)
  // useEffect(() => {
  //   !isMobile && wasOnScreen === false && isOnScreen && chat.initConversation()
  // }, [isOnScreen])
  return (
    <Box
      id="contato"
      ref={ref}
      pb={2}
      pt={5}
      bgcolor={secondary ? 'primary.dark' : 'background.default'}
    >
      <Container
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          [theme.breakpoints.down('xs')]: { justifyContent: 'center' },
        }}
      >
        <Slogan secondary={secondary} />
        <SocialList />
        <Box flex={1} ml={2} css={{ minWidth: '60%' }}>
          <Typography variant="body2" color="textSecondary">
            &copy; Vida Natural • {new Date().getFullYear()} • Imbituba / SC
            <br />
            <Link href="mailto:falecom@vidanatural.eco.br">
              falecom@vidanatural.eco.br
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
