import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import BrandSvg from 'components/svg/brand'
import Drawer from 'components/drawer'
import IconButton from 'components/icon-button'
import Link from 'components/link'

import menu from 'data/menu'

const MenuButton = ({ name, path, onClose }) => (
  <Link
    className="flex py-3 px-4 hover:bg-gray-100"
    href={path}
    onClick={onClose}
  >
    {name}
  </Link>
)

const MenuItem = ({ name, onClose, path, links }) => {
  const hasSubmenu = !!links
  return (
    <>
      {hasSubmenu ? (
        <div>
          <span className="sticky top-0 flex text-sm text-gray-500 font-semibold bg-white py-2 px-4">
            {name}
          </span>
          {links.map((item) => (
            <MenuButton
              key={item.as || item.path}
              onClose={onClose}
              {...item}
            />
          ))}
        </div>
      ) : (
        <MenuButton onClose={onClose} name={name} path={path} />
      )}
    </>
  )
}

const MobileMenu = ({ tags }) => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = (nextState) => () => setOpen(nextState)
  return (
    <div className="w-1/3 lg:hidden">
      <IconButton
        className="text-xl -ml-2"
        onClick={toggleDrawer(true)}
        aria-label="Menu"
      >
        <FiMenu />
      </IconButton>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Link className="border-b" href="/">
          <BrandSvg className="w-32 m-auto mb-4 mt-6" />
        </Link>
        <div className="divide-y min-w-screen-3/4">
          {[tags].map((item) => (
            <MenuItem key={item.name} onClose={toggleDrawer(false)} {...item} />
          ))}
          {menu.links.map((item) => (
            <MenuItem key={item.name} onClose={toggleDrawer(false)} {...item} />
          ))}
        </div>
      </Drawer>
    </div>
  )
}

export default MobileMenu
