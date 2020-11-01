import { useEffect } from 'react'

import { localCartInfo } from 'lib/domain'
import { useTagsMenu } from 'lib/domain-hooks'
import { useScroll } from 'lib/hooks'
import { classes } from 'lib/utils'
import useGlobal from 'lib/use-global'

import CartIcon from './cart-icon'
import DesktopMenu from './desktop-menu'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import Notifications from './notifications'
import SearchIcon from './search-icon'

const Header = ({ stick, variant }) => {
  const tags = useTagsMenu()

  const { y } = useScroll()
  const sticky = stick || y > 0

  const [, actions] = useGlobal()
  useEffect(() => {
    const { id, token } = localCartInfo()
    if (id || token) {
      actions.listCart()
    }
  }, [])

  const cx = classes('fixed inset-x-0 top-0 z-40', {
    'bg-white shadow-sm': sticky,
    'bg-transparent h-32': !sticky,
    'text-white': variant === 'primary' && !sticky,
    'text-gray-900': variant !== 'primary' || sticky,
  })
  return (
    <div className={cx}>
      <Notifications />
      <div className="lg:px-6 px-4">
        <div className="flex items-center duration-500">
          <MobileMenu tags={tags} />
          <div className="w-1/3 lg:w-auto lg:flex-grow flex items-center justify-center lg:justify-start">
            <Logo sticky={sticky} variant={variant} />
          </div>
          <DesktopMenu tags={tags} />
          <div className="flex justify-end flex-grow lg:flex-grow-0">
            <SearchIcon />
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
