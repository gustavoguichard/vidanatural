import { useContext, useRef, useEffect } from 'react'
import { Box, Container } from '@material-ui/core'
import NextLink from 'next/link'
import { FaWhatsapp, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import theme from 'src/ui/theme'
import Link from 'src/components/Link'
import { usePrevious, useOnScreen } from 'utils/hooks'
import { useIsMobile } from 'utils/responsive'
import { Context } from 'utils/CustomerChat'
import sloganImg from 'static/images/slogan.svg'

const iconProps = {
  size: 30,
  css: {
    margin: theme.spacing(),
    transition: 'all .3s',
    '&:hover': {
      color: `${theme.palette.secondary.main} !important`,
    },
  },
}

const Footer = () => {
  const chat = useContext(Context)
  const isMobile = useIsMobile()
  const ref = useRef()
  const isOnScreen = useOnScreen(ref, '0px', true)
  const wasOnScreen = usePrevious(isOnScreen)
  useEffect(() => {
    !isMobile && wasOnScreen === false && isOnScreen && chat.initConversation()
  }, [isOnScreen])
  return (
    <Box id="contato" ref={ref} pb={2} pt={5} bgcolor="background.default">
      <Container
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          [theme.breakpoints.down('xs')]: { justifyContent: 'center' },
        }}
      >
        <NextLink href="/eu-uso-cosmetica-consciente">
          <a title="Ir para a homepage">
            <img
              css={{
                width: 150,
                margin: theme.spacing(),
                transition: 'all .3s',
              }}
              src={sloganImg}
              alt="Vida Natural"
            />
          </a>
        </NextLink>
        <div>
          <a
            href="https://wa.me/5548991039557"
            title="Fale conosco por whatsapp"
            target="blank"
          >
            <FaWhatsapp {...iconProps} color={theme.palette.secondary.light} />
          </a>
          <a
            href="https://instagram.com/vidanatural.eco"
            title="Ir para nosso Instagram"
            target="blank"
          >
            <FaInstagram {...iconProps} color="#B05CFE" />
          </a>
          <a
            href="http://facebook.com/vidanatural.eco"
            title="Ir para nosso Facebook"
            target="blank"
          >
            <FaFacebookSquare {...iconProps} color="#0082FB" />
          </a>
        </div>
        <Box flex={1} ml={2} css={{ minWidth: '60%' }}>
          &copy; Vida Natural • {new Date().getFullYear()} • Imbituba / SC
          <br />
          <Link href="mailto:falecom@vidanatural.eco.br">
            falecom@vidanatural.eco.br
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
