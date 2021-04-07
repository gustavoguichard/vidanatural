import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

import { classes } from 'lib/utils'

import Skeleton from 'components/skeleton'

const Img = ({
  src,
  alwaysShow,
  circle,
  className,
  width,
  height,
  ...props
}) => {
  const [ref, visible] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const isFill = !(width && height)

  return (
    <>
      {visible || alwaysShow ? (
        <div
          ref={ref}
          className={classes('relative overflow-hidden', className)}
        >
          <Image
            layout={isFill ? 'fill' : 'intrinsic'}
            objectFit={isFill ? 'cover' : undefined}
            unoptimized
            {...props}
            width={width}
            height={height}
            src={src}
          />
        </div>
      ) : (
        <Skeleton
          ref={ref}
          width={width}
          height={height}
          variant={circle ? 'circle' : 'rect'}
          className={className}
        />
      )}
    </>
  )
}

export default Img
