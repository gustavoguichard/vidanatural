import { IconButton } from '@material-ui/core'
import { FaWhatsapp, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import theme from 'src/ui/theme'

const Icon = ({
  Component,
  children,
  color = theme.pallete.primary.contrastText,
  size = 30,
  ...props
}) => (
  <IconButton>
    <a {...props} title={children} target="blank">
      <Component
        css={{
          transition: 'all .3s',
          '&:hover': {
            color: `${theme.palette.secondary.main} !important`,
          },
        }}
        size={size}
        color={color}
      />
    </a>
  </IconButton>
)

const SocialList = props => {
  return (
    <div className="social-list">
      <Icon
        Component={FaWhatsapp}
        href="https://wa.me/5548991039557"
        color={theme.palette.secondary.light}
        {...props}
      >
        Fale conosco por whatsapp
      </Icon>
      <Icon
        Component={FaInstagram}
        href="https://instagram.com/vidanatural.eco"
        color="#B05CFE"
        {...props}
      >
        Ir para nosso Instagram
      </Icon>
      <Icon
        Component={FaFacebookSquare}
        href="http://facebook.com/vidanatural.eco"
        color="#0082FB"
        {...props}
      >
        Ir para nosso Facebook
      </Icon>
    </div>
  )
}

export default SocialList
