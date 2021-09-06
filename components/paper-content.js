import React from 'react'

import { cx } from 'lib/utils'

const PaperContent = ({ children, maxWidth = 'xl', overlap = true }) => (
  <div className="w-screen bg-white sm:bg-transparent">
    <div className={`max-w-screen-${maxWidth} m-auto px-10`}>
      <div
        className={cx(
          'relative z-10 sm:shadow-lg sm:bg-white sm:rounded-lg',
          overlap && 'sm:-mb-4 sm:-mt-20'
        )}
      >
        <div className="py-16 sm:my-8 sm:px-10">{children}</div>
      </div>
    </div>
  </div>
)

export default PaperContent
