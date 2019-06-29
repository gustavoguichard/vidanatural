import { useContext, useRef, useEffect } from 'react'
import { Box } from '@material-ui/core'
import Link from 'next/link'
import { FaWhatsapp, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import theme from 'src/ui/theme'
import { usePrevious, useOnScreen } from 'utils/hooks'
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
  const ref = useRef()
  const isOnScreen = useOnScreen(ref, '0px', true)
  const wasOnScreen = usePrevious(isOnScreen)
  useEffect(() => {
    wasOnScreen === false && isOnScreen && chat.initConversation()
  }, [isOnScreen])
  return (
    <Box
      ref={ref}
      p={2}
      pt={5}
      display="flex"
      alignItems="center"
      bgcolor="background.default"
    >
      <Link href="/eu-uso-cosmetica-consciente">
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
      </Link>
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
      <Box flex={1} ml={2}>
        Vida Natural Cosmética Consciente LTDA
        <br />
        Antolino E. Martins, 106 • Imbituba/SC • CEP: 88780-000
      </Box>
    </Box>
  )
}

export default Footer
