import { useEffect } from 'react'

import api from 'lib/api'
import { useTagsMenu } from 'lib/domain-hooks'
import { useScroll } from 'lib/hooks'
import { cx } from 'lib/utils'
import useGlobal from 'lib/use-global'

import Notifications from 'components/notifications'
import CartIcon from './cart-icon'
import DesktopMenu from './desktop-menu'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import SearchIcon from './search-icon'

const Header = ({ stick, variant }) => {
  const tags = useTagsMenu()

  const { y } = useScroll()
  const sticky = stick || y > 0

  const [, actions] = useGlobal()
  useEffect(() => {
    const token = api.vnda.utils.getLocalToken()
    if (token) {
      actions.listCart()
    }
  }, [])

  return (
    <div
      className={cx(
        'fixed inset-x-0 top-0 z-40 flex flex-col',
        sticky ? 'bg-white shadow-sm' : 'bg-transparent h-32',
        variant === 'primary' && !sticky && 'text-white',
        (variant !== 'primary' || sticky) && 'text-gray-900'
      )}
    >
      <Notifications />
      <div className={`lg:px-6 px-4 ${sticky && 'order-first'}`}>
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
