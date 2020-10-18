import React, { useState, useRef, memo, useEffect, cloneElement } from 'react'
import times from 'lodash/times'

import { useWindowDimensions } from 'lib/hooks'

const Masonry = ({
  children,
  fallback = 2,
  adjust = 1,
  minColumnWidth = 290,
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
    <div {...props} className="items-stretch flex flex-grow" ref={wrapper}>
      {times(columns, (index) => {
        const isLast = index === columns - 1
        return (
          <div
            className={`items-stretch flex flex-col flex-grow -mr-${
              isLast ? 'px' : 0
            }`}
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
