import { useCallback, useState, useRef, useEffect } from 'react'
import throttle from 'lodash/throttle'

const useElScroll = (el?: HTMLElement, delay = 300) => {
  const getPositions = (element?: HTMLElement) => ({
    x: typeof element !== 'undefined' ? element.scrollLeft : 0,
    y: typeof element !== 'undefined' ? element.scrollTop : 0,
  })

  const [state, setState] = useState(getPositions(el))

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el])

  return state
}

function useDidMount(callback: Function) {
  useEffect(() => {
    callback()
  }, [])
}

const usePrevious = (value: unknown) => {
  const ref = useRef<unknown>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const useToggle = (initial = false): [boolean, () => void] => {
  const [value, setValue] = useState(initial)
  const toggler = () => setValue(!value)
  return [value, toggler]
}

function useInterval(callback: () => void, delay: null | number) {
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

export { usePrevious, useToggle, useInterval, useDidMount, useElScroll }
