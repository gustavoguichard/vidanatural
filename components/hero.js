import { classes } from 'lib/utils'

import BackgroundImg from 'components/background-img'

const sizes = { small: '40vh', medium: '65vh', full: '100vh' }

const Hero = ({
  children,
  style = {},
  size = 'medium',
  background,
  className,
  filter,
}) => {
  const cx = classes(
    'relative',
    'text-center text-white',
    'pb-10 pt-16 z-10 max-w-4xl text-shadow-lg',
  )
  const wCx = classes(
    className,
    'relative flex flex-col items-center justify-center bg-gray-800',
  )
  return (
    <div className={wCx} css={{ minHeight: sizes[size] }}>
      {background && (
        <BackgroundImg filter={filter} alwaysShow src={background} />
      )}
      <div className={cx} style={style}>
        {children}
      </div>
    </div>
  )
}
export default Hero
