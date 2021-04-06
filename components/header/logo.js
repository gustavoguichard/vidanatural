import { classes } from 'lib/utils'

import LogoSvg from 'components/svg/logo'
import BrandSvg from 'components/svg/brand'
import Link from 'components/link'

const Logo = ({ sticky, variant }) => {
  // const secondary = variant === 'secondary'
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
      <BrandSvg className={cx} title="Vida Natural" />
      <LogoSvg className={cxB} title="Vida Natural" />
    </Link>
  )
}

export default Logo
