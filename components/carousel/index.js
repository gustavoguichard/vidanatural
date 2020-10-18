import React, {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react'
import Router from 'next/router'
import clamp from 'lodash/clamp'

import { classes } from 'lib/utils'
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
    className,
  },
  innerRef,
) => {
  const scroller = useRef()
  const childrenCount = React.Children.count(children)
  const [page, setPage] = useState(0)
  const getPageStats = calculatePages(childrenCount, itemWidth)
  const { x } = useElScroll(scroller.current, 300)

  const reset = () => {
    setPage(0)
    scroller.current && scroller.current.scroll({ left: 0, behavior: 'auto' })
  }

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
    Router.events.on('routeChangeComplete', reset)
    return () => Router.events.off('routeChangeComplete', reset)
  })

  useEffect(() => {
    const { width } = getPageStats(scroller.current)
    setPage(Math.round(x / width))
  }, [x])

  useImperativeHandle(innerRef, () => ({
    next: doScroll(1),
    prev: doScroll(-1),
    goTo: goToPage,
  }))

  const cx = classes('flex relative items-center', className)
  return (
    <div className={cx}>
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
    </div>
  )
}

export default React.memo(forwardRef(Carousel))
