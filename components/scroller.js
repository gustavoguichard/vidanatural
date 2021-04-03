import React, { forwardRef } from 'react'
import * as customTypes from 'types/prop-types'

import { classes } from 'lib/utils'

export const getItemWidth = (itemWidth) => {
  const isPercent = customTypes.regex.test(itemWidth)
  return itemWidth === 'auto' || isPercent ? itemWidth : `${itemWidth}px`
}

const Scroller = (
  { flex, snap = 'mandatory', gap = 0, itemWidth = 'auto', children, ...props },
  ref,
) => {
  const width = getItemWidth(itemWidth)
  const count = React.Children.count(children)
  const gridTemplateColumns = flex ? undefined : `repeat(${count}, ${width})`

  return (
    <div
      ref={ref}
      className={classes(
        'overflow-x-scroll w-full max-w-full hide-scrollbar',
        flex ? 'flex flex-nowrap' : `grid`,
      )}
      style={{
        gridTemplateColumns,
        gridColumnGap: `${gap / 2}rem`,
        scrollSnapType: snap ? `x ${snap}` : null,
      }}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          className: classes(child.props.className, flex && 'flex-shrink-0'),
          style: {
            ...child.props.style,
            scrollSnapAlign: 'start',
          },
        }),
      )}
    </div>
  )
}

export default React.memo(forwardRef(Scroller))
