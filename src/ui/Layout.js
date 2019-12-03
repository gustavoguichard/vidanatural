import { memo } from 'react'
import { Box } from '@material-ui/core'
import Chat from 'src/ui/Chat'
import Header from 'src/ui/Header'
import Footer from 'src/ui/Footer'
import Certifications from 'src/components/Certifications'

const Layout = ({
  children,
  logoCompanion,
  variant = 'primary',
  footerVariant = variant,
  hideCertifications,
  stickBar,
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
    <Chat />
  </>
)

export default memo(Layout)
