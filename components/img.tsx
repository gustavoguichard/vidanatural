import React, { CSSProperties } from 'react'
import Image, { ImageProps } from 'next/image'

import { cx } from 'lib/utils'

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
        {...props}
        width={width}
        height={height}
        src={safeSrc || src}
      />
    </div>
  )
}

export default Img
