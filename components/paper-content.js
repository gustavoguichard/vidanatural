import React from 'react'

import { classes } from 'lib/utils'

const PaperContent = ({ children, overlap = true }) => {
  const cx = classes(
    'relative z-10 sm:shadow-lg sm:bg-white sm:rounded-lg',
    overlap && 'sm:-mb-4 sm:-mt-20',
  )
  return (
    <div className="max-w-screen-xl m-auto px-10">
      <div className={cx}>
        <div className="py-16 sm:my-8 sm:px-10">{children}</div>
      </div>
    </div>
  )
}

export default PaperContent
