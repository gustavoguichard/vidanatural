import { AppBar, Button, Toolbar } from '@material-ui/core'
import Logo from 'src/ui/header/Logo'
import DesktopMenu from 'src/ui/header/DesktopMenu'
import MobileMenu from 'src/ui/header/MobileMenu'
import { useIsMobile } from 'utils/responsive'

const Header = ({ sticky }) => {
  const isMobile = useIsMobile()
  const elevation = sticky ? 4 : 0
  return (
    <AppBar
      css={{
        backgroundColor: sticky ? null : 'transparent !important',
        transition: 'all .3s !important',
      }}
      position="sticky"
      elevation={elevation}
    >
      <Toolbar variant="dense">
        <Logo sticky={sticky} />
        <div css={{ flexGrow: 1 }} />
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </Toolbar>
    </AppBar>
  )
}

export default Header
