import { useState } from 'react'
import { useRouter } from 'next/router'

import Dropdown from 'components/dropdown'
import Link from 'components/link'

import menu from 'data/menu'

const SubMenu = ({ name, active, links }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`rounded p-3 text-sm uppercase hover:bg-gray-400 hover:bg-opacity-25 ${
          active ? 'text-teal-600' : 'inherit'
        }`}
        aria-label={name}
        onClick={() => setOpen(true)}
      >
        {name}
      </button>
      <Dropdown onClose={() => setOpen(false)} open={open}>
        {links.map((subItem, idx) => (
          <Link
            href={subItem.path}
            onClick={() => setOpen(false)}
            key={`submenu-${idx}`}
            className="flex px-4 py-2  text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-200 focus:text-gray-900"
            role="menuitem"
          >
            {subItem.name}
          </Link>
        ))}
      </Dropdown>
    </div>
  )
}

const DesktopMenu = ({ tags }) => {
  const router = useRouter()
  return (
    <div className="hidden lg:flex">
      {[tags, ...menu.links].map((item) => {
        const hasSubmenu = !!item.links
        const active = router.pathname.startsWith(item.path)
        return hasSubmenu ? (
          <SubMenu active={active} key={item.name} {...item} />
        ) : (
          <Link
            className={`rounded p-3 text-sm uppercase hover:bg-gray-400 hover:bg-opacity-25  ${
              active ? 'text-teal-600' : 'inherit'
            }`}
            key={item.name}
            href={item.path}
          >
            {item.name}
          </Link>
        )
      })}
    </div>
  )
}

export default DesktopMenu
