import { useInView } from 'react-intersection-observer'
import { CircularProgress } from '@material-ui/core'

import Skeleton from 'components/skeleton'

const Img = ({
  src,
  alwaysShow,
  Component = 'img',
  circle,
  className,
  hideSpinner,
  ...props
}) => {
  const [ref, visible] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const { width, height } = props
  return (
    <>
      {visible || alwaysShow ? (
        <Component ref={ref} className={className} src={src} {...props} />
      ) : (
        <Skeleton
          ref={ref}
          width={width}
          height={height}
          variant={circle ? 'circle' : 'rect'}
          css={{ visibility: hideSpinner ? 'hidden' : 'visible' }}
          className={className}
        />
      )}
    </>
  )
}

export default Img
