import { cx } from 'lib/utils'

import Layout from 'components/layout'

const SinglePageLayout = ({
  children,
  variant,
  gray,
  hero,
  className,
  ...props
}) => (
  <Layout
    variant={variant}
    className={gray ? 'bg-gray-100' : 'bg-white'}
    {...props}
  >
    {hero}
    <div
      className={cx(
        'flex flex-col items-center max-w-screen-xl m-auto border-b-8 border-white',
        hero ? 'p-10' : 'pt-32 px-10 pb-8'
      )}
    >
      <div className={cx('flex flex-col w-full lg:w-8/12', className)}>
        {children}
      </div>
    </div>
  </Layout>
)

export default SinglePageLayout
