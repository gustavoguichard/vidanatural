import { memo, useState, useEffect } from 'react'

import { useInterval, usePrevious } from 'lib/hooks'

interface CountdownProps {
  active: boolean
  time: number
  timeout?: number
  onTick?: (t: number) => void
  onFinish: () => void
  stop?: boolean
}

const Countdown = ({
  active = false,
  time = 0,
  timeout = 1000,
  onTick = () => null,
  onFinish = () => null,
  stop = false,
}: CountdownProps) => {
  const [elapsedTime, setElapsedTime] = useState(0)
  const remainingTime = time - elapsedTime / 1000
  const isActive = active && remainingTime > 0 ? timeout : null
  const prev = usePrevious(isActive)
  useInterval(() => {
    if (!stop) {
      onTick(Math.max(remainingTime - timeout / 1000, 0))
      setElapsedTime(elapsedTime + timeout)
    }
  }, isActive)

  useEffect(() => {
    if (prev !== null && isActive === null && elapsedTime > 0) {
      onFinish()
    }
  }, [isActive])

  return null
}

export default memo(Countdown)
