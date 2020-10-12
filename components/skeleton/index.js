import { forwardRef } from 'react'

import { classes } from 'lib/utils'

const Skeleton = ({ variant = 'rect', className, ...props }, ref) => {
  const cx = classes(className, 'bg-gray-200 animate-pulse', {
    'rounded-full': variant === 'circle',
    rounded: variant !== 'circle',
  })
  return <div className={cx} ref={ref} {...props} />
}

export default forwardRef(Skeleton)
