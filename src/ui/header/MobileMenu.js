import { useState } from 'react'
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
} from '@material-ui/core'
import NextLink from 'next/link'
import { Menu } from '@material-ui/icons'
import menu from 'data/menu'

const MenuButton = ({ name, path, onClose }) => (
  <NextLink href={path}>
    <ListItem
      onClick={() => {
        onClose()
      }}
      button
    >
      <ListItemText>{name}</ListItemText>
    </ListItem>
  </NextLink>
)

const MenuItem = ({ name, onClose, last, path, links }) => {
  const hasSubmenu = !!links
  return (
    <>
      {hasSubmenu ? (
        <List
          subheader={
            <ListSubheader color="primary" disableSticky>
              {name}
            </ListSubheader>
          }
        >
          {links.map(item => (
            <MenuButton key={item.path} onClose={onClose} {...item} />
          ))}
        </List>
      ) : (
        <MenuButton onClose={onClose} name={name} path={path} />
      )}
      {last || <Divider />}
    </>
  )
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = nextOpen => () => setOpen(nextOpen)
  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        color="inherit"
        aria-label="Menu"
      >
        <Menu />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List css={{ minWidth: '80vw' }}>
          {menu.links.map((item, index) => (
            <MenuItem
              key={item.name}
              onClose={toggleDrawer(false)}
              last={index >= menu.links.length - 1}
              {...item}
            />
          ))}
        </List>
      </SwipeableDrawer>
    </>
  )
}

export default MobileMenu
