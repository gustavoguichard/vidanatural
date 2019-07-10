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
      {visible || <CircularProgress ref={ref} className={className} />}
      {visible && (
        <Component ref={ref} className={className} src={src} {...props} />
      )}
    </Fragment>
  )
}

export default Img
