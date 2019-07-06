import React, { cloneElement, forwardRef, memo } from 'react'
import times from 'lodash/times'

const boxStyles = {
  alignItems: 'stretch',
  display: 'flex',
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 1,
  minHeight: 'min-content',
}

const Masonry = ({ columns, children, adjust = 1, ...props }, ref) => (
  <div {...props} style={boxStyles} ref={ref}>
    {times(columns, index => {
      const isLast = index === columns - 1
      return (
        <div
          css={{
            ...boxStyles,
            flexDirection: 'column',
            marginRight: isLast ? -1 : 0,
          }}
          key={`tile-${index}`}
        >
          {React.Children.toArray(children)
            .filter(
              (child, filterIndex) =>
                (filterIndex + index + (columns - adjust)) % columns === 0,
            )
            .map((child, idx) =>
              cloneElement(child, { ...child.props, key: idx }),
            )}
        </div>
      )
    })}
  </div>
)

export default memo(forwardRef(Masonry))
