import { useEffect, useRef } from 'react'
import take from 'lodash/take'
import isArray from 'lodash/isArray'
import { ShoppingBasket } from '@material-ui/icons'
import {
  IconButton,
  Button,
  Menu,
  Badge,
  ListSubheader,
  Divider,
} from '@material-ui/core'
import { ripple } from 'src/css/animations'
import { sleep } from 'lib/utils'
import CartItem from 'src/ui/header/CartItem'
import theme from 'lib/theme'
import api from 'lib/api'
import useGlobal from 'lib/use-global'

const CartIcon = () => {
  const [{ cart, showCart }, actions] = useGlobal()
  const safeCart = isArray(cart) ? cart : []
  const cartRef = useRef(null)
  const hideCart = async () => {
    await sleep(8000)
    actions.hideCart()
  }
  useEffect(() => {
    if (showCart) {
      hideCart()
    }
  }, [showCart])
  return (
    <>
      <IconButton
        ref={cartRef}
        color="inherit"
        aria-label="Carrinho"
        aria-haspopup="true"
        aria-controls="cart-popover"
        href={api.vnda.CART_URL}
      >
        <Badge
          overlap="circle"
          color="secondary"
          invisible={!safeCart.length}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          css={{
            '& > .MuiBadge-badge:after': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              animation: `${ripple} 1.2s infinite ease-in-out`,
              border: `1px solid ${theme.palette.secondary.main}`,
              content: '""',
            },
          }}
          variant="dot"
        >
          <ShoppingBasket fontSize="inherit" css={{ fontSize: '1.35rem' }} />
        </Badge>
      </IconButton>
      <Menu
        id="cart-popover"
        autoFocus
        anchorEl={cartRef.current}
        getContentAnchorEl={null}
        css={{ '& .MuiList-padding': { paddingBottom: 0 } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={actions.hideCart}
        keepMounted
        open={showCart}
      >
        <ListSubheader color="inherit">Adicionado recentemente</ListSubheader>
        <Divider />
        {take(safeCart, 3).map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
        <Button
          css={{ display: 'flex', width: '100%', borderRadius: 0 }}
          variant="contained"
          color="secondary"
          href={api.vnda.CART_URL}
        >
          Ver carrinho
        </Button>
      </Menu>
    </>
  )
}

export default CartIcon
