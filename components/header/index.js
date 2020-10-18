import { useEffect } from 'react'

import { useTagsMenu } from 'lib/domain-hooks'
import { useScroll } from 'lib/hooks'
import { classes } from 'lib/utils'
import useGlobal from 'lib/use-global'

import CartIcon from './cart-icon'
import DesktopMenu from './desktop-menu'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import SearchIcon from './search-icon'

const Header = ({ stick, logoCompanion, variant }) => {
  const tags = useTagsMenu()

  const { y } = useScroll()
  const sticky = stick || y > 0
  const companionSize = sticky ? 35 : 60

  const [, actions] = useGlobal()
  useEffect(actions.getCartItems, [])

  const cx = classes('px-4 md:px-6 fixed inset-x-0 top-0 z-40', {
    'bg-white shadow-sm': sticky,
    'bg-transparent h-32': !sticky,
    'text-white': variant === 'primary' && !sticky,
  })
  return (
    <div className={cx}>
      <div className="flex items-center duration-500">
        <MobileMenu tags={tags} />
        <div className="w-1/3 md:w-auto md:flex-grow flex items-center justify-center md:justify-start">
          <Logo sticky={sticky} variant={variant} />
          {logoCompanion && (
            <img
              className="hidden md:block relative transition-all duration-500"
              css={{
                maxWidth: companionSize,
                maxHeight: companionSize,
                left: sticky ? 0 : -20,
              }}
              src={logoCompanion}
              alt="Embalagem"
            />
          )}
        </div>
        <DesktopMenu tags={tags} />
        <div className="flex justify-end flex-grow md:flex-grow-0">
          <SearchIcon />
          <CartIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
