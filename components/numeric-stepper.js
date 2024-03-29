import React from 'react'

import { cx } from 'lib/utils'

const NumericStepper = ({ current, onIncrease, onDecrease, fixed }) => {
  const classes = cx('h-full hover:bg-gray-100 grow', fixed && 'w-8')
  return (
    <>
      <button type="button" className={classes} onClick={onDecrease}>
        -
      </button>
      <span className={cx('flex items-center h-full', fixed ? 'px-1' : 'px-3')}>
        {current}
      </span>
      <button type="button" className={classes} onClick={onIncrease}>
        +
      </button>
    </>
  )
}

export default NumericStepper
