import { memo } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'

import Header from 'components/header'
import SEO from 'components/seo'
import Skeleton from 'components/skeleton'

const BottomCTA = dynamic(() => import('components/bottom-cta'), { ssr: false })
const Chat = dynamic(() => import('components/chat'), { ssr: false })
const Footer = dynamic(() => import('components/footer'))
const Certifications = dynamic(() => import('components/certifications'), {
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
    {hideCertifications || <Certifications />}
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
