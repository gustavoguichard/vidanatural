import React from 'react'
import Image from 'next/image'

import { classes } from 'lib/utils'

const Img = ({ src, className, width, height, ...props }) => {
  const isFill = !(width && height)

  return (
    <div className={classes('relative overflow-hidden', className)}>
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
