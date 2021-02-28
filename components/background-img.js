import Img from 'components/img'

const BackgroundImg = ({ src, filter, alt = 'Background', ...props }) => (
  <Img
    aria-hidden="true"
    src={src}
    alt={alt}
    className="absolute inset-0 w-full h-full object-cover object-center"
    css={{ filter }}
    {...props}
  />
)

export default BackgroundImg
