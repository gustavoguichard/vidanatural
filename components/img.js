import React from 'react'
import Image from 'next/image'

import { classes } from 'lib/utils'

const Img = ({ src, style, className, width, height, alt, ...props }) => {
  const isFill = !(width && height)

  return (
    <div
      style={style}
      className={classes('relative overflow-hidden', className)}
    >
      <Image
        layout={isFill ? 'fill' : 'intrinsic'}
        objectFit={isFill ? 'cover' : undefined}
        {...props}
        alt={alt}
        width={width}
        height={height}
        src={src}
      />
    </div>
  )
}

export default Img
