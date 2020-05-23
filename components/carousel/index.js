import React, {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react'
import clamp from 'lodash/clamp'
import { Box } from '@material-ui/core'

import { useElScroll } from 'lib/hooks'

import Scroller from 'components/scroller'
import { NextBt, PrevBt } from './buttons'
import renderDefaultBt from './render-default-bt'
import { calculatePages, scrollToPage, widthInPixels } from './utils'

const Carousel = (
  {
    children,
    itemWidth = '100%',
    gap,
    snap,
    onChange,
    NextButton,
    PrevButton,
    ...props
  },
  innerRef,
) => {
  const scroller = useRef()
  const childrenCount = React.Children.count(children)
  const [page, setPage] = useState(0)
  const getPageStats = calculatePages(childrenCount, itemWidth)
  const { x } = useElScroll(scroller.current, 300)

  const goToPage = (newPage) => {
    const { width } = widthInPixels(itemWidth, scroller.current)
    const { total, perPage } = getPageStats(scroller.current)
    const next = clamp(newPage, 0, total - 1)
    setPage(next)
    scrollToPage(scroller.current, width, next, perPage)
  }

  const doScroll = (increment) => () => {
    goToPage(page + increment)
  }

  useEffect(() => {
    const { total, perPage } = getPageStats(scroller.current)
    onChange && onChange({ total, perPage, current: page + 1 })
  }, [onChange, page])

  useEffect(() => {
    const { width } = getPageStats(scroller.current)
    setPage(Math.round(x / width))
  }, [x])

  useImperativeHandle(innerRef, () => ({
    next: doScroll(1),
    prev: doScroll(-1),
    goTo: goToPage,
  }))

  return (
    <Box position="relative" alignItems="center" display="flex" {...props}>
      {childrenCount > 1
        ? renderDefaultBt(PrevButton, doScroll(-1), PrevBt)
        : null}
      {childrenCount > 1
        ? renderDefaultBt(NextButton, doScroll(1), NextBt)
        : null}
      <Scroller ref={scroller} gap={gap} snap={snap} itemWidth={itemWidth}>
        {React.Children.map(children, (child, idx) => (
          <div key={`carousel-${idx}`} className="item">
            {child}
          </div>
        ))}
      </Scroller>
    </Box>
  )
}

export default React.memo(forwardRef(Carousel))
