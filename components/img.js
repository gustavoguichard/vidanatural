import React from 'react'
import Image from 'next/image'

import { cx } from 'lib/utils'

const Img = ({ src, style, className, width, height, ...props }) => {
  const isFill = !(width && height)

  return (
    <div style={style} className={cx('relative overflow-hidden', className)}>
      <Image
        layout={isFill ? 'fill' : 'intrinsic'}
        objectFit={isFill ? 'cover' : undefined}
        {...props}
        width={width}
        height={height}
        src={src}
      />
    </div>
  )
}

export default Img
