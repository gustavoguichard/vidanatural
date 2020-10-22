import { memo } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'

import Header from 'components/header'
import SEO from 'components/seo'
import SearchBar from 'components/header/search-bar'
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
    <SearchBar />
    <Header variant={variant} stick={stickBar} />
    <main {...props} className="flex-grow">
      {children}
    </main>
    {hideCertifications || <Certifications />}
    <Footer variant={footerVariant} />
    <BottomCTA>
      <Chat
        className={`bottom-0 absolute right-0 transform -translate-x-2 -translate-y-2 md:flex ${
          hideChat ? 'hidden' : ''
        }`}
      />
      {ctaChildren}
    </BottomCTA>
  </>
)

export default memo(Layout)
