import { useEffect } from 'react'
import analytics from 'lib/analytics'
import { isClient } from 'lib/utils'
import { useRouter } from 'next/router'

export const intersectionPolyfill = async (): Promise<void> => {
  if (isClient && typeof window.IntersectionObserver === 'undefined') {
    // eslint-disable-next-line global-require
    await require('intersection-observer')
  }
}

export const useTracking = (): void => {
  const router = useRouter()

  useEffect(() => {
    analytics.init()
    analytics.pageView()
  }, [])

  useEffect(() => {
    router?.events.on('routeChangeComplete', analytics.pageView)
    return () => router?.events.off('routeChangeComplete', analytics.pageView)
  }, [router])
}
