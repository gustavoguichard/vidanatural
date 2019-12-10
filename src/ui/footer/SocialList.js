import { FiFacebook, FiInstagram } from 'react-icons/fi'
import theme from 'src/ui/theme'

const icons = {
  facebook: props => <FiFacebook {...props} />,
  instagram: props => <FiInstagram {...props} />,
}

const css = {
  margin: theme.spacing(),
  transition: 'all .3s',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}

const Icon = ({
  site,
  children,
  color = theme.pallete.primary.contrastText,
  size = 20,
  ...props
}) => (
  <a
    css={{ display: 'inline-block' }}
    {...props}
    title={children}
    target="_blank"
  >
    {icons[site]({ css, color, size })}
  </a>
)

const SocialList = ({ className, ...props }) => {
  return (
    <div
      css={{
        [theme.breakpoints.up('md')]: {
          alignItems: 'flex-end',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
      className={`social-list ${className}`}
    >
      <Icon
        site="instagram"
        href="https://instagram.com/vidanatural.eco"
        {...props}
      >
        Ir para nosso Instagram
      </Icon>
      <Icon
        site="facebook"
        href="http://facebook.com/vidanatural.eco"
        {...props}
      >
        Ir para nosso Facebook
      </Icon>
    </div>
  )
}

export default SocialList
