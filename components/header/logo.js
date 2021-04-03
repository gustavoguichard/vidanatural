import { classes } from 'lib/utils'

import logoImg from 'public/static/svgs/logo.svg'
import logoWhiteImg from 'public/static/svgs/logo-white.svg'
import brandImg from 'public/static/svgs/brand.svg'
import Link from 'components/link'

const Logo = ({ sticky, variant }) => {
  const secondary = variant === 'secondary'
  const cx = classes(
    'transition-all py-3 w-32',
    sticky
      ? 'opacity-100 duration-700'
      : 'opacity-0 duration-100 invisible absolute pointer-events-none',
  )
  const cxB = classes(
    'transform w-20 transition-transform',
    sticky
      ? 'm-2 duration-100 scale-50 opacity-0 invisible absolute pointer-events-none'
      : 'm-4 duration-500 scale-100 opacity-100',
  )
  return (
    <Link href="/" title="Ir para a página inicial">
      <img className={cx} src={brandImg} alt="Vida Natural" />
      <img
        className={cxB}
        src={secondary ? logoImg : logoWhiteImg}
        alt="Vida Natural"
      />
    </Link>
  )
}

export default Logo
