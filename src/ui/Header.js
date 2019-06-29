import { AppBar, Button, Toolbar, useScrollTrigger } from '@material-ui/core'
import Logo from 'src/ui/header/Logo'
import HeaderMenu from 'src/ui/header/HeaderMenu'

const Header = () => {
  const sticky = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: process.env.browser ? window() : undefined,
  })
  const elevation = sticky ? 4 : 0
  const position = sticky ? 'sticky' : 'static'
  return (
    <AppBar
      css={{
        backgroundColor: sticky ? null : 'transparent !important',
        transition: 'all .3s !important',
      }}
      position={position}
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
