import React from 'react'

import { classes } from 'lib/utils'

const NumericStepper = ({ current, onIncrease, onDecrease, fixed }) => {
  const cx = classes('h-full hover:bg-gray-100 flex-grow', { 'w-8': fixed })
  const nCx = classes('flex items-center h-full', {
    'px-1': fixed,
    'px-3': !fixed,
  })
  return (
    <>
      <button type="button" className={cx} onClick={onDecrease}>
        -
      </button>
      <span className={nCx}>{current}</span>
      <button type="button" className={cx} onClick={onIncrease}>
        +
      </button>
    </>
  )
}

export default NumericStepper
