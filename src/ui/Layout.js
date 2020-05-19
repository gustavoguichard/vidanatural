import { memo } from 'react'
import { Box } from '@material-ui/core'
import dynamic from 'next/dynamic'
import Router from 'next/router'

import Header from 'src/ui/Header'
import SEO from 'components/seo'
import Skeleton from 'src/ui/Skeleton'

const BottomCTA = dynamic(() => import('src/ui/BottomCTA'), { ssr: false })
const Chat = dynamic(() => import('src/ui/Chat'), { ssr: false })
const Footer = dynamic(() => import('src/ui/Footer'))
const Certifications = dynamic(() => import('components/Certifications'), {
  loading: () => <Skeleton />,
  ssr: false,
})

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
  title,
  seo = {},
  ctaChildren,
  ...props
}) => (
  <>
    <SEO title={title} {...seo} />
    <Header logoCompanion={logoCompanion} variant={variant} stick={stickBar} />
    <main {...props} css={{ flex: 1 }}>
      {children}
    </main>
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
