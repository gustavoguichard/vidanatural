import Image from 'next/image'

import { classes } from 'lib/utils'

const sizes = {
  small: 'min-h-[40vh]',
  medium: 'min-h-[65vh]',
  full: 'min-h-screen',
}

const Hero = ({
  children,
  style = {},
  size = 'medium',
  background,
  className,
  bgClass,
}) => {
  const cx = classes(
    'relative',
    'text-center text-white',
    'pb-10 pt-16 z-10 max-w-4xl text-shadow-lg',
  )
  const wCx = classes(
    className,
    'relative flex flex-col items-center justify-center bg-gray-800',
    sizes[size],
  )
  return (
    <div className={wCx}>
      {background && (
        <div
          aria-hidden="true"
          className={classes('absolute inset-0', bgClass)}
        >
          <Image layout="fill" objectFit="cover" unoptimized src={background} />
        </div>
      )}
      <div className={cx} style={style}>
        {children}
      </div>
    </div>
  )
}
export default Hero
