import Link from 'src/components/Link'
import theme from 'src/ui/theme'

import logoImg from 'static/images/logo.svg'

const Logo = ({ sticky }) => {
  return (
    <Link href="/" color="secondary" title="Ir para a página inicial">
      <img
        css={{
          width: sticky ? 40 : 80,
          margin: sticky ? theme.spacing() : theme.spacing(2),
          transform: sticky ? 'translateX(14px)' : null,
          transition: 'all .3s',
        }}
        src={logoImg}
        alt="Vida Natural"
      />
    </Link>
  )
}

export default Logo
