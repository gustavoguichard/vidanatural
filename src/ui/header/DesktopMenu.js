import { useState, useEffect } from 'react'
import Router, { withRouter } from 'next/router'
import { Button, Menu, MenuItem } from '@material-ui/core'
import kebabCase from 'lodash/kebabCase'
import ButtonLink from 'src/components/ButtonLink'
import Link from 'src/components/Link'
import clsx from 'clsx'
import theme from 'src/ui/theme'
import menu from 'data/menu'

const SubMenu = ({ name, path, links, router }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const id = `menu-appbar-${kebabCase(name)}`
  const active = router.pathname === path
  return (
    <>
      <Button
        color={active ? 'secondary' : 'inherit'}
        aria-label={name}
        aria-haspopup="true"
        aria-controls={id}
        onClick={event => setAnchorEl(event.currentTarget)}
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

const SubMenuRouter = withRouter(SubMenu)

const HeaderMenu = () => {
  return menu.links.map(item => {
    const hasSubmenu = !!item.links
    return hasSubmenu ? (
      <SubMenuRouter key={item.name} {...item} />
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
