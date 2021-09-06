import { cx } from 'lib/utils'

import Chat from 'components/chat'
import ProductCTA from 'components/products/cta'

const MobileCTA = ({ product, visible }) => (
  <div
    className={cx(
      'fixed flex md:hidden justify-evenly items-center inset-x-0 bottom-0 p-2 bg-white shadow-lg z-30 transition-all duration-500',
      visible && 'transform translate-y-20'
    )}
  >
    <ProductCTA product={product} hideQuantity />
    <Chat bg="transparent" shadow={false} />
  </div>
)

export default MobileCTA
