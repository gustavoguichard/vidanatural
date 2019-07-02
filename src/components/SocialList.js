import { FaWhatsapp } from 'react-icons/fa'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import ButtonLink from 'src/components/ButtonLink'
import theme from 'src/ui/theme'

const Icon = ({
  Component,
  children,
  color = theme.pallete.primary.contrastText,
  size = 25,
  ...props
}) => (
  <ButtonLink icon {...props} title={children} target="blank">
    <Component
      css={{
        transition: 'all .3s',
        '&:hover': {
          color: theme.palette.secondary.main,
        },
      }}
      size={size}
      color={color}
    />
  </ButtonLink>
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
        Component={FiInstagram}
        href="https://instagram.com/vidanatural.eco"
        color="#B05CFE"
        {...props}
      >
        Ir para nosso Instagram
      </Icon>
      <Icon
        Component={FiFacebook}
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
