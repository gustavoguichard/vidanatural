import { useInView } from 'react-intersection-observer'
import { CircularProgress } from '@material-ui/core'

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
  const { width, height } = props
  return (
    <>
      {visible || alwaysShow ? (
        <Component ref={ref} className={className} src={src} {...props} />
      ) : (
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            width: width || null,
            height: height || null,
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
    </>
  )
}

export default Img
