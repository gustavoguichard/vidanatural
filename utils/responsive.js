export const isRetina = () => window.devicePixelRatio > 1.3

export const isMobile = () =>
  !!(
    (process.browser && navigator.userAgent.match(/Android/i)) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  )

export const isTablet = () =>
  !!(process.browser && (isMobile() || navigator.userAgent.match(/iPad/i)))

export const isDesktop = () => !isTablet()
