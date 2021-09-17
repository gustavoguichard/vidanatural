import React, { CSSProperties } from 'react'
import Image, { ImageProps } from 'next/image'

import { cx } from 'lib/utils'

const shimmer = (w: number, h = w) => `
<svg className="opacity-30" width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="rgba(0,0,0,.05)" offset="20%" />
      <stop stop-color="rgba(0,0,0,.1)" offset="50%" />
      <stop stop-color="rgba(0,0,0,.05)" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="rgba(0,0,0,.2)" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

function getBlurDataURL(width: string | number = 200, height = width) {
  return `data:image/svg+xml;base64,${toBase64(
    shimmer(+(width ?? 200), +(height ?? width ?? 200)),
  )}`
}

type Props = ImageProps & { style?: CSSProperties }
const Img = ({
  src,
  style,
  className,
  width,
  height,
  alt = '',
  ...props
}: Props) => {
  const isFill = !(width && height)
  const safeSrc =
    typeof src === 'string' && src.replace(/^(\/\/.+)/, 'https:$1')

  return (
    <div style={style} className={cx('relative overflow-hidden', className)}>
      <Image
        layout={isFill ? 'fill' : 'intrinsic'}
        objectFit={isFill ? 'cover' : undefined}
        alt={alt}
        {...(typeof src === 'string'
          ? { placeholder: 'blur', blurDataURL: getBlurDataURL(width, height) }
          : {})}
        {...props}
        width={width}
        height={height}
        src={safeSrc || src}
      />
    </div>
  )
}

export default Img
export { getBlurDataURL }
