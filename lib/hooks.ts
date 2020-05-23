import { useCallback, useState, useRef, useEffect, ElementRef } from 'react'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
import { useMediaQuery } from '@material-ui/core'
import { isClient } from 'lib/utils'
import theme from 'lib/theme'

export const useIsMobile = () => {
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  return !matches
}

export const useIsDesktop = () => {
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  return matches
}

export const useWindowDimensions = (delay = 300) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })
  useEffect(() => {
    const update = () =>
      setDimensions({ height: window.innerHeight, width: window.innerWidth })
    const handleResize = debounce(update, delay)
    window.addEventListener('resize', handleResize, { passive: true })
    update()
    return () => window.removeEventListener('resize', handleResize)
  }, [delay])
  return dimensions
}

export const useElScroll = (el?: HTMLElement, delay = 300) => {
  const getPositions = (element?: HTMLElement) => ({
    x: typeof element !== 'undefined' ? element.scrollLeft : 0,
    y: typeof element !== 'undefined' ? element.scrollTop : 0,
  })

  const [state, setState] = useState(getPositions(el))

  const updateScroll = useCallback(
    throttle(() => {
      setState(getPositions(el))
    }, delay),
    [el],
  )

  useEffect(() => {
    if (typeof el === 'undefined') return
    el.addEventListener('scroll', updateScroll)
    return () => {
      el.removeEventListener('scroll', updateScroll)
    }
  }, [el])

  return state
}

export const useScroll = (delay = 300) => {
  const frame = useRef(0)
  const [state, setState] = useState({
    x: isClient ? window.scrollX : 0,
    y: isClient ? window.scrollY : 0,
  })

  const updateScroll = useCallback(
    throttle(() => {
      setState({
        x: window.scrollX,
        y: window.scrollY,
      })
    }, delay),
    [],
  )

  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(updateScroll)
    }

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    })

    return () => {
      cancelAnimationFrame(frame.current)
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return state
}

export const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const useScrollDirection = (threeshold = 15, delay = 300) => {
  const [direction, setDirection] = useState('UP')
  const { y } = useScroll(delay) || { y: 0 }
  const prevY = usePrevious(y) ?? 0

  if (direction !== 'DOWN' && y > prevY + threeshold) {
    setDirection('DOWN')
  }
  if (direction !== 'UP' && y < prevY - threeshold) {
    setDirection('UP')
  }

  return direction
}

export const useProcessOnce = (fn: (x: any) => any, value: any) => {
  const [result, setResult] = useState()
  useEffect(() => {
    if (!result) {
      setResult(fn(value))
    }
  }, [])
  return result || value
}

export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial)
  const toggler = () => setValue(!value)
  return [value, toggler]
}
