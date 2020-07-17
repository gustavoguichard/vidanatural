import React from 'react'
import { useMediaQuery } from '@material-ui/core'

import theme from 'lib/theme'
import { classes } from 'lib/utils'

import BackgroundImg from 'components/background-img2'

const Hero = ({
  children,
  filter,
  style = {},
  size = 'medium',
  background,
  mobileBg,
}) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const cx = classes(
    'relative flex flex-col items-center justify-center',
    'text-center text-white',
    // 'pb-10 pt-16 z-10',
    { 'min-h-screen': size === 'full' },
  )
  return (
    <div className="relative bg-green-400">
      {background && (
        <BackgroundImg
          alwaysShow
          src={isDesktop ? background : mobileBg || background}
        />
      )}
      <div className={cx} style={style}>
        {children}
      </div>
    </div>
  )
}
export default Hero
