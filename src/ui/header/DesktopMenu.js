import { useState, useEffect } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import kebabCase from 'lodash/kebabCase'
import Link from 'src/components/Link'
import { interceptHash } from 'utils/helpers'
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
          <Link color="inherit" key={subItem.path} href={subItem.path}>
            <MenuItem>{subItem.name}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  )
}

const HeaderMenu = () => {
  return menu.links.map(item => {
    const hasSubmenu = !!item.links
    return hasSubmenu ? (
      <SubMenu key={item.name} {...item} />
    ) : (
      <Link color="inherit" key={item.name} href={item.path}>
        <Button data-hash={item.path} onClick={interceptHash} color="inherit">
          {item.name}
        </Button>
      </Link>
    )
  })
}

export default HeaderMenu
