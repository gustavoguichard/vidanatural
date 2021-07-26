import { forwardRef } from 'react'

import { cx } from 'lib/utils'

const Skeleton = ({ variant = 'rect', className, ...props }, ref) => (
  <div
    className={cx(
      className,
      'bg-gray-200 animate-pulse',
      variant === 'circle' ? 'rounded-full' : 'circle',
    )}
    ref={ref}
    {...props}
  />
)

export default forwardRef(Skeleton)
