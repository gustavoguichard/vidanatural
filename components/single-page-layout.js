import { classes } from 'lib/utils'

import Layout from 'components/layout'

const SinglePageLayout = ({
  children,
  variant,
  gray,
  hero,
  className,
  ...props
}) => {
  const cx = classes(
    'flex flex-col items-center max-w-screen-xl m-auto border-b-8 border-white',
    {
      'p-10': !!hero,
      'pt-32 px-10 pb-8': !hero,
    },
  )
  const cx2 = classes('flex flex-col w-full lg:w-8/12', className)
  return (
    <Layout
      variant={variant}
      className={gray ? 'bg-gray-100' : 'bg-white'}
      {...props}
    >
      {hero}
      <div className={cx}>
        <div className={cx2}>{children}</div>
      </div>
    </Layout>
  )
}

export default SinglePageLayout
