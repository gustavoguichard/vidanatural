import { AppBar, Button, Toolbar, useScrollTrigger } from '@material-ui/core'
import Logo from 'src/ui/header/Logo'
import HeaderMenu from 'src/ui/header/HeaderMenu'
import { useScroll } from 'utils/hooks'

const Header = () => {
  const scroll = useScroll()
  const sticky = scroll.y >= 50
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
      <Toolbar>
        <Logo sticky={sticky} />
        <div css={{ flexGrow: 1 }} />
        <HeaderMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
