import { classes } from 'lib/utils'

import Layout from 'components/layout'

const SinglePageLayout = ({ children, gray, hero, className, ...props }) => {
  const cx = classes(
    'flex flex-col items-center max-w-screen-xl m-auto border-b-8 border-white',
    {
      'p-16': !!hero,
      'pt-32 px-6 pb-8': !hero,
    },
  )
  const cx2 = classes('flex flex-col w-auto md:w-8/12', className)
  return (
    <Layout className={gray ? 'bg-gray-100' : 'bg-white'} {...props}>
      {hero}
      <div className={cx}>
        <div className={cx2}>{children}</div>
      </div>
    </Layout>
  )
}

export default SinglePageLayout
