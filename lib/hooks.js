import { useCallback, useState, useRef, useEffect } from 'react'
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

export const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const useScrollDirection = (threeshold = 15, delay = 300) => {
  const [direction, setDirection] = useState()
  const { y } = useScroll(delay) || { y: 0 }
  const prevY = usePrevious(y)

  if (direction !== 'DOWN' && y > prevY + threeshold) {
    setDirection('DOWN')
  }
  if (direction !== 'UP' && y < prevY - threeshold) {
    setDirection('UP')
  }

  return direction
}

export const useProcessOnce = (fn, value) => {
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
