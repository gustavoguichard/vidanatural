import Image from 'next/image'

import { cx } from 'lib/utils'

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
}) => (
  <div
    className={cx(
      className,
      'relative flex flex-col items-center justify-center bg-gray-800',
      sizes[size],
    )}
  >
    {background && (
      <div aria-hidden="true" className={cx('absolute inset-0', bgClass)}>
        <Image
          alt=""
          layout="fill"
          objectFit="cover"
          unoptimized
          src={background}
        />
      </div>
    )}
    <div
      className={cx(
        'relative text-center text-white pb-10 pt-16 z-10 max-w-4xl text-shadow-lg',
      )}
      style={style}
    >
      {children}
    </div>
  </div>
)
export default Hero
