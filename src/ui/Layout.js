import { memo } from 'react'
import { Box } from '@material-ui/core'
import Router from 'next/router'
import BottomCTA from 'src/ui/BottomCTA'
import Chat from 'src/ui/Chat'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'
import Certifications from 'src/components/Certifications'

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0)
})

const Layout = ({
  children,
  logoCompanion,
  variant = 'primary',
  footerVariant = variant,
  hideCertifications,
  hideChat,
  stickBar,
  ctaChildren,
}) => (
  <>
    <Header logoCompanion={logoCompanion} variant={variant} stick={stickBar} />
    <main css={{ flex: 1 }}>{children}</main>
    {hideCertifications || (
      <Box css={{ width: '100%' }}>
        <Certifications css={{ '& img': { filter: 'brightness(0.35)' } }} />
      </Box>
    )}
    <Footer variant={footerVariant} />
    <BottomCTA>
      {hideChat ? null : (
        <Chat css={{ bottom: 8, position: 'absolute', right: 8 }} />
      )}
      {ctaChildren}
    </BottomCTA>
  </>
)

export default memo(Layout)
