import { Fragment } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useInView } from 'react-intersection-observer'

const Img = ({
  src,
  alwaysShow,
  Component = 'img',
  className,
  hideSpinner,
  ...props
}) => {
  const [ref, visible] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  return (
    <Fragment>
      {visible || alwaysShow ? (
        <Component ref={ref} className={className} src={src} {...props} />
      ) : (
        <CircularProgress
          ref={ref}
          css={{
            margin: 'auto',
            visibility: hideSpinner ? 'hidden' : 'visible',
          }}
          className={className}
        />
      )}
    </Fragment>
  )
}

export default Img
