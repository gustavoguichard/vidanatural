import Link from 'src/components/Link'
import theme from 'src/ui/theme'
import { Button } from '@material-ui/core'

import logoImg from 'static/images/logo.svg'
import brandImg from 'static/images/brand.svg'

const Logo = ({ sticky, variant }) => {
  const secondary = variant === 'secondary'
  return (
    <Link href="/" title="Ir para a página inicial">
      <Button>
        {sticky ? (
          <img
            css={{
              width: 130,
              opacity: +sticky,
              transition: 'all .3s',
            }}
            src={brandImg}
            alt="Vida Natural"
          />
        ) : (
          <img
            css={{
              filter: secondary ? 'invert(0.95)' : null,
              margin: sticky ? theme.spacing() : theme.spacing(2),
              opacity: sticky ? 0 : 1,
              transform: sticky ? 'translateX(14px)' : null,
              transition: 'all .3s',
              width: sticky ? 40 : 80,
            }}
            src={logoImg}
            alt="Vida Natural Logo"
          />
        )}
      </Button>
    </Link>
  )
}

export default Logo
