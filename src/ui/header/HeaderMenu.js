import { useState, useEffect, useContext } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import kebabCase from 'lodash/kebabCase'
import Link from 'next/link'
import { Context } from 'utils/CustomerChat'
import menu from 'data/menu'

const SubMenu = ({ name, links }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const id = `menu-appbar-${kebabCase(name)}`
  return (
    <>
      <Button
        aria-label={name}
        aria-controls={id}
        onClick={event => setAnchorEl(event.currentTarget)}
        color="inherit"
      >
        {name}
      </Button>
      <Menu
        id={id}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        {links.map(subItem => (
          <Link key={subItem.path} href={subItem.path}>
            <MenuItem>{subItem.name}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  )
}

const HeaderMenu = () => {
  const chat = useContext(Context)
  const doAction = ({ action }) => event => {
    if (action === 'chat') {
      event.preventDefault()
      chat.initConversation()
    }
  }
  return menu.links.map(item => {
    const isSubmenu = !!item.links
    return isSubmenu ? (
      <SubMenu key={item.name} {...item} />
    ) : (
      <Link key={item.name} href={item.path}>
        <Button onClick={doAction(item)} color="inherit">
          {item.name}
        </Button>
      </Link>
    )
  })
}

export default HeaderMenu
