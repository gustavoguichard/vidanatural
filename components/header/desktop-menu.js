import { useState } from 'react'
import { useRouter } from 'next/router'
import kebabCase from 'lodash/kebabCase'

import Dropdown from 'components/dropdown'
import Link from 'components/link'

import menu from 'data/menu'

const SubMenu = ({ name, path, as, links }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const id = `menu-appbar-${kebabCase(name)}`
  const active = [path, as].includes(router.pathname)
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`rounded p-3 text-sm uppercase hover:bg-gray-500 hover:bg-opacity-25 ${
          active ? 'text-green-600' : 'inherit'
        }`}
        aria-label={name}
        aria-haspopup="true"
        aria-controls={id}
        onClick={() => setOpen(true)}
      >
        {name}
      </button>
      <Dropdown onClose={() => setOpen(false)} open={open}>
        {links.map((subItem, idx) => (
          <Link
            href={subItem.path}
            as={subItem.as}
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
  return (
    <div className="hidden md:flex">
      {[tags, ...menu.links].map((item) => {
        const hasSubmenu = !!item.links
        return hasSubmenu ? (
          <SubMenu key={item.name} {...item} />
        ) : (
          <Link
            className="rounded p-3 text-sm uppercase hover:bg-gray-500 hover:bg-opacity-25"
            key={item.name}
            href={item.path}
            as={item.as}
          >
            {item.name}
          </Link>
        )
      })}
    </div>
  )
}

export default DesktopMenu
