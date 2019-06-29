import { useCallback, useState, useRef, useEffect, useReducer } from 'react'
import get from 'lodash/get'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
import isEqual from 'lodash/isEqual'

export const useWindowDimensions = (delay = 300) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })
  useEffect(() => {
    const update = () =>
      setDimensions({ height: window.innerHeight, width: window.innerWidth })
    const handleResize = debounce(update, delay)
    window.addEventListener('resize', handleResize)
    update()
    return () => window.removeEventListener('resize', handleResize)
  }, [delay])
  return dimensions
}

export const useScroll = () => {
  const frame = useRef(0)
  const isClient = process.env.browser
  const [state, setState] = useState({
    x: isClient ? window.scrollX : 0,
    y: isClient ? window.scrollY : 0,
  })

  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        setState({
          x: window.scrollX,
          y: window.scrollY,
        })
      })
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

export const useColumns = (splitFactor = 365) => {
  const { width } = useWindowDimensions()
  return width ? Math.round(width / splitFactor) : 2
}

export const useMedia = (media, defaultState = false) => {
  const [state, setState] = useState(defaultState)
  const query = get(
    {
      desktop: '(min-device-width: 992px)',
      tabletDown: '(max-device-width: 991px)',
      tabletUp: '(min-device-width: 768px)',
    },
    media,
    media,
  )
  useEffect(() => {
    if (!window.matchMedia) return null
    const mql = window.matchMedia(query)
    const onChange = () => setState(!!mql.matches)
    mql.addListener(onChange)
    setState(mql.matches)

    return () => mql.removeListener(onChange)
  }, [media, query])

  return state
}

export const useProcessOnce = (fn, ...args) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = fn(...args)
  }, [args, fn])
  return ref.current
}

export const useOnMount = callback => {
  useEffect(() => {
    callback()
  }, [callback])
}

export const useOnUnmount = callback => {
  useEffect(() => callback, [callback])
}

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  return isMounted
}

export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial)
  const toggler = () => setValue(!value)
  return [value, toggler]
}

export const useHtmlClass = (className, condition) => {
  useEffect(() => {
    const { classList } = document.documentElement
    const method = condition ? 'add' : 'remove'
    classList[method](className)
  }, [className, condition])
}

export const useSetState = initialState => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    initialState,
  )
  return [state, setState]
}

export const useSafeSetState = initialState => {
  const [state, setState] = useSetState(initialState)
  const mountedRef = useRef(false)
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])
  const safeSetState = (...args) => mountedRef.current && setState(...args)
  return [state, safeSetState]
}

export const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const useDeepDiffEffect = (callback, values) => {
  const cleanup = useRef()
  useEffect(() => {
    if (!isEqual(previousValues, values)) {
      cleanup.current = callback()
    }
    return cleanup.current
  })
  const previousValues = usePrevious(values)
}

export const useOnScreen = (ref, rootMargin = '0px', once) => {
  const [loaded, setLoaded] = useState(false)
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once && !loaded && entry.isIntersecting) {
          setLoaded(true)
        }
        setIntersecting(loaded || entry.isIntersecting)
      },
      {
        rootMargin,
      },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [loaded, once, ref, rootMargin])

  return isIntersecting
}
