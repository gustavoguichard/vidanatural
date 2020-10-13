import { useEffect } from 'react'
import { useScrollTrigger, useMediaQuery } from '@material-ui/core'

import { useTagsMenu } from 'lib/domain-hooks'
import { classes } from 'lib/utils'
import useGlobal from 'lib/use-global'

import CartIcon from './cart-icon'
import DesktopMenu from './desktop-menu'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import SearchIcon from './search-icon'

const Header = ({ stick, logoCompanion, variant }) => {
  const tags = useTagsMenu()

  const isDesktop = useMediaQuery('(min-width: 790px)')
  const hasScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: process.env.browser ? window() : undefined,
  })
  const sticky = stick || hasScrolled
  const companionSize = sticky ? 35 : 60

  const [, actions] = useGlobal()
  useEffect(actions.getCartItems, [])

  const MenuComponent = isDesktop ? DesktopMenu : MobileMenu

  const cx = classes('px-6 fixed inset-x-0 top-0 z-40', {
    'bg-white shadow-sm': sticky,
    'bg-transparent h-32': !sticky,
    'text-white': variant === 'primary' && !sticky,
  })
  return (
    <div className={cx}>
      <div className="flex items-center duration-500">
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
        <div className="flex-grow" />
        <MenuComponent tags={tags}>
          <SearchIcon />
          <CartIcon />
        </MenuComponent>
      </div>
    </div>
  )
}

export default Header
