import { Fragment } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useInView } from 'react-intersection-observer'

const Img = ({ src, Component = 'img', className, ...props }) => {
  const [ref, visible] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  return (
    <Fragment>
      {visible ? (
        <Component ref={ref} className={className} src={src} {...props} />
      ) : (
        <CircularProgress
          ref={ref}
          css={{ margin: 'auto' }}
          className={className}
        />
      )}
    </Fragment>
  )
}

export default Img
