import { useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  useMediaQuery,
} from '@material-ui/core'
import get from 'lodash/get'
import Logo from 'src/ui/header/Logo'
import DesktopMenu from 'src/ui/header/DesktopMenu'
import MobileMenu from 'src/ui/header/MobileMenu'
import CartIcon from 'src/ui/header/CartIcon'
import SearchBar from 'src/ui/header/SearchBar'
import SearchIcon from 'src/ui/header/SearchIcon'
import useGlobal from 'utils/useGlobal'
import { useScrollDirection } from 'utils/hooks'
import theme from 'src/ui/theme'

const Header = ({ stick, logoCompanion, variant }) => {
  const secondary = variant === 'secondary'
  const isDesktop = useMediaQuery('(min-width: 790px)')
  const scrollDirection = useScrollDirection()
  const hasScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: isDesktop ? 80 : 20,
    target: process.env.browser ? window() : undefined,
  })
  const sticky = stick || hasScrolled
  const elevation = sticky ? 4 : 0
  const companionSize = sticky ? 35 : 60
  const isOnTop =
    typeof document !== 'undefined' &&
    get(document, 'documentElement.scrollTop', 0) < 20

  const [, actions] = useGlobal()
  useEffect(actions.getCartItems, [])
  return (
    <>
      <AppBar
        css={{
          backgroundColor: sticky ? null : 'transparent',
          top: !isOnTop && sticky && scrollDirection === 'DOWN' ? -64 : 0,
          transition: 'all .3s',
        }}
        position="fixed"
        elevation={elevation}
      >
        <Toolbar
          css={{
            color:
              secondary && !sticky
                ? theme.palette.secondary.contrastText
                : theme.palette.primary.contrastText,
            transition: 'all .3s',
          }}
          variant="dense"
        >
          <Logo sticky={sticky} variant={variant} />
          {logoCompanion && isDesktop && (
            <img
              css={{
                maxWidth: companionSize,
                maxHeight: companionSize,
                position: 'relative',
                left: sticky ? 0 : -20,
                transition: 'all .4s ease-in-out',
              }}
              src={logoCompanion}
              alt="Embalagem"
            />
          )}
          <div css={{ flexGrow: 1 }} />
          {isDesktop ? (
            <DesktopMenu>
              <SearchIcon />
              <CartIcon />
            </DesktopMenu>
          ) : (
            <MobileMenu>
              <SearchIcon />
              <CartIcon />
            </MobileMenu>
          )}
        </Toolbar>
      </AppBar>
      <SearchBar />
    </>
  )
}

export default Header
