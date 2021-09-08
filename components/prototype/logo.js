import { cx } from 'lib/utils'

import BrandSvg from 'components/svg/brand'

const Logo = () => {
  return (
    <a href="#">
      <span className="sr-only">Vida Natural</span>
      <BrandSvg
        className="w-32 py-3 duration-700 opacity-100"
        title="Vida Natural"
      />
    </a>
  )
}

export default Logo
