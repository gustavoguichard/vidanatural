import { classes } from 'lib/utils'

import logoImg from 'public/static/svgs/logo.svg'
import brandImg from 'public/static/svgs/brand.svg'
import Link from 'components/link'

const Logo = ({ sticky, variant }) => {
  const secondary = variant === 'secondary'
  const cx = classes('transition-all w-32', {
    'opacity-0 duration-100 invisible absolute pointer-events-none': !sticky,
    'opacity-100 duration-700': sticky,
  })
  const cxB = classes('transform w-20 transition-all', {
    'm-4 duration-500 scale-100 opacity-100': !sticky,
    'm-2 duration-100 scale-50 opacity-0 invisible absolute pointer-events-none': sticky,
  })
  return (
    <Link href="/" title="Ir para a página inicial">
      <img
        css={{ filter: 'invert(0.95)' }}
        className={cx}
        src={brandImg}
        alt="Vida Natural"
      />
      <img
        className={cxB}
        css={{ filter: secondary ? 'invert(0.95)' : null }}
        src={logoImg}
        alt="Vida Natural"
      />
    </Link>
  )
}

export default Logo
