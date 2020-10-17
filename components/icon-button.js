import { forwardRef } from 'react'
import { useRouter } from 'next/router'

import { classes } from 'lib/utils'

const IconButton = (
  { label, href, children, className, onClick, ...props },
  ref,
) => {
  const router = useRouter()
  const cx = classes(
    `text-inherit hover:bg-opacity-25 rounded-full inline-flex p-3 hover:bg-gray-500 transition duration-300`,
    className,
  )
  const handleClick = () => {
    onClick && onClick()
    href && router.push(href)
  }
  return (
    <button
      ref={ref}
      className={cx}
      type="button"
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default forwardRef(IconButton)
