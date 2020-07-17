import { classes } from 'lib/utils'

import Img from 'components/img'

const BackgroundImg = ({ src, alt = 'Background', ...props }) => {
  const cx = classes(
    'absolute inset-0 w-full h-full object-cover object-center',
  )
  return (
    <Img aria-hidden="true" {...props} src={src} alt={alt} className={cx} />
  )
}

export default BackgroundImg
