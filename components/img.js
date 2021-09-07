import React from 'react'
import Image from 'next/image'

import { cx } from 'lib/utils'

const Img = ({ src, style, className, width, height, alt = '', ...props }) => {
  const isFill = !(width && height)

  return (
    <div style={style} className={cx('relative overflow-hidden', className)}>
      <Image
        layout={isFill ? 'fill' : 'intrinsic'}
        objectFit={isFill ? 'cover' : undefined}
        alt={alt}
        {...props}
        width={width}
        height={height}
        src={src.replace(/^(\/\/.+)/, 'https:$1')}
      />
    </div>
  )
}

export default Img
