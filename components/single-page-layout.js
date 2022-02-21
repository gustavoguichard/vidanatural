import { cx } from 'lib/utils'

const SinglePageLayout = ({ children, className, ...props }) => (
  <div {...props}>
    <div className="flex flex-col items-center max-w-screen-xl px-10 pt-32 pb-8 m-auto border-b-8 border-white">
      <div className={cx('flex flex-col w-full lg:w-8/12', className)}>
        {children}
      </div>
    </div>
  </div>
)

export default SinglePageLayout
