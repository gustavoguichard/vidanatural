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
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            width: props.width || null,
            height: props.height || null,
          }}
          className={className}
        >
          <CircularProgress
            ref={ref}
            css={{
              visibility: hideSpinner ? 'hidden' : 'visible',
            }}
          />
        </div>
      )}
    </Fragment>
  )
}

export default Img
