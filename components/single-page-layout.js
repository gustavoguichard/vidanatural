import { cx } from 'lib/utils'

const SinglePageLayout = ({
  children,
  variant,
  gray,
  hero,
  className,
  ...props
}) => (
  <div {...props}>
    {hero}
    <div
      className={cx(
        'flex flex-col items-center max-w-screen-xl m-auto border-b-8 border-white',
        hero ? 'p-10' : 'pt-32 px-10 pb-8',
      )}
    >
      <div className={cx('flex flex-col w-full lg:w-8/12', className)}>
        {children}
      </div>
    </div>
  </div>
)

export default SinglePageLayout
