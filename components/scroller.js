import React, { forwardRef } from 'react'
import * as customTypes from 'types/prop-types'

export const getItemWidth = (itemWidth) => {
  const isPercent = customTypes.regex.test(itemWidth)
  return itemWidth === 'auto' || isPercent ? itemWidth : `${itemWidth}px`
}

export const getBaseStyles = (children, flex, width, gridColumnGap) => {
  const count = React.Children.count(children)
  return flex
    ? {
        display: 'flex',
        flexWrap: 'nowrap',
      }
    : {
        display: 'grid',
        gridColumnGap,
        gridTemplateColumns: `repeat(${count}, ${width})`,
      }
}

const Scroller = (
  { flex, snap = 'mandatory', gap = 0, itemWidth = 'auto', children, ...props },
  ref,
) => {
  const width = getItemWidth(itemWidth)

  const baseStyles = getBaseStyles(children, flex, width, `${gap / 2}rem`)
  const itemStyles = flex ? { flexShrink: 0 } : {}

  return (
    <div
      ref={ref}
      className="overflow-x-scroll w-full max-w-full"
      css={{
        ...baseStyles,
        scrollSnapType: snap ? `x ${snap}` : null,
        '&::-webkit-scrollbar': { display: 'none' },
      }}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          style: {
            ...child.props.style,
            ...itemStyles,
            scrollSnapAlign: 'start',
          },
        }),
      )}
    </div>
  )
}

export default React.memo(forwardRef(Scroller))
