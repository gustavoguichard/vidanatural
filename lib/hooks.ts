import { useCallback, useState, useRef, useEffect } from 'react'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
import { isClient } from 'lib/utils'

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
    el.addEventListener('scroll', updateScroll, { passive: true })
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

export const usePrevious = (value: unknown) => {
  const ref = useRef<unknown>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const useScrollDirection = (threeshold = 15, delay = 300) => {
  const [direction, setDirection] = useState('UP')
  const { y } = useScroll(delay) || { y: 0 }
  const prevY = (usePrevious(y) as number) ?? 0

  if (direction !== 'DOWN' && y > prevY + threeshold) {
    setDirection('DOWN')
  }
  if (direction !== 'UP' && y < prevY - threeshold) {
    setDirection('UP')
  }

  return direction
}

export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial)
  const toggler = () => setValue(!value)
  return [value, toggler]
}

export const useOnClickOutside = (ref: any, handler: (e: any) => null) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('focusin', listener, { passive: true })
    document.addEventListener('mousedown', listener, { passive: true })
    document.addEventListener('touchstart', listener, { passive: true })

    return () => {
      document.removeEventListener('focusin', listener)
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export function useInterval(callback: () => void, delay: null | number) {
  const savedCallback = useRef(() => {})

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
    return undefined
  }, [delay])
}

export function useTimeout(callback: () => void, delay: null | number) {
  const savedCallback = useRef(() => {})

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay)
      return () => clearTimeout(id)
    }
    return undefined
  }, [delay])
}
