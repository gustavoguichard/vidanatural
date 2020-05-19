import React, { useState, useRef, memo, useEffect, cloneElement } from 'react'
import times from 'lodash/times'

import { useWindowDimensions } from 'lib/hooks'

const boxStyles = {
  alignItems: 'stretch',
  display: 'flex',
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 1,
  minHeight: 'min-content',
}

const Masonry = ({
  children,
  fallback = 2,
  adjust = 1,
  minColumnWidth = 300,
  ...props
}) => {
  const wrapper = useRef(null)
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const { width } = useWindowDimensions()
  useEffect(() => {
    if (wrapper.current) {
      setWrapperWidth(wrapper.current.getBoundingClientRect().width)
    }
  }, [width])
  const columns = wrapperWidth
    ? Math.round(wrapperWidth / minColumnWidth)
    : fallback

  return (
    <div {...props} style={boxStyles} ref={wrapper}>
      {times(columns, (index) => {
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
}

export default memo(Masonry)
