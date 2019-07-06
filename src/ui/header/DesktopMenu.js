import { useState, useEffect } from 'react'
import Router from 'next/router'
import { Button, Menu, MenuItem } from '@material-ui/core'
import kebabCase from 'lodash/kebabCase'
import ButtonLink from 'src/components/ButtonLink'
import Link from 'src/components/Link'
import theme from 'src/ui/theme'
import menu from 'data/menu'

const SubMenu = ({ name, links }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const id = `menu-appbar-${kebabCase(name)}`
  return (
    <>
      <Button
        aria-label={name}
        aria-haspopup="true"
        aria-controls={id}
        onClick={event => setAnchorEl(event.currentTarget)}
        color="inherit"
      >
        {name}
      </Button>
      <Menu
        id={id}
        autoFocus
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
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
          <MenuItem
            onClick={() => Router.push(subItem.path)}
            key={subItem.path}
          >
            {subItem.name}
          </MenuItem>
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
      <ButtonLink
        css={{
          '&.active': {
            color: theme.palette.secondary.main,
          },
        }}
        color="inherit"
        key={item.name}
        href={item.path}
      >
        {item.name}
      </ButtonLink>
    )
  })
}

export default HeaderMenu
