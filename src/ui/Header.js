import { AppBar, Button, Toolbar, useScrollTrigger } from '@material-ui/core'
import Logo from 'src/ui/header/Logo'
import DesktopMenu from 'src/ui/header/DesktopMenu'
import MobileMenu from 'src/ui/header/MobileMenu'
import theme from 'src/ui/theme'
import { useIsMobile } from 'utils/responsive'

const Header = ({ stick, variant }) => {
  const secondary = variant === 'secondary'
  const isMobile = useIsMobile()
  const hasScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: isMobile ? 20 : 80,
    target: process.env.browser ? window() : undefined,
  })
  const sticky = stick || hasScrolled
  const elevation = sticky ? 4 : 0
  return (
    <AppBar
      css={{
        backgroundColor: sticky ? null : 'transparent !important',
        transition: 'all .3s !important',
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
        <div css={{ flexGrow: 1 }} />
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </Toolbar>
    </AppBar>
  )
}

export default Header
