import BrandSvg from 'components/svg/brand'
import Link from 'components/link'

const Logo = () => {
  return (
    <Link href="/">
      <span className="sr-only">Vida Natural</span>
      <BrandSvg className="w-32 py-3 duration-700 opacity-100" />
    </Link>
  )
}

export default Logo
