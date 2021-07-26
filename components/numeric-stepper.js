import React from 'react'

import { cx } from 'lib/utils'

const NumericStepper = ({ current, onIncrease, onDecrease, fixed }) => (
  <>
    <button
      type="button"
      className={cx('h-full hover:bg-gray-100 flex-grow', fixed && 'w-8')}
      onClick={onDecrease}
    >
      -
    </button>
    <span className={cx('flex items-center h-full', fixed ? 'px-1' : 'px-3')}>
      {current}
    </span>
    <button type="button" className={cx} onClick={onIncrease}>
      +
    </button>
  </>
)

export default NumericStepper
