import { cx } from 'lib/utils'
import { getDiscount } from 'lib/domain'

const DiscountTag = ({ product, small, ...props }) => {
  const content = getDiscount(product)
  return product.discount_rule ? (
    <div
      className={cx(
        'absolute flex justify-center items-center p-2 z-20 bg-white border border-gray-200 rounded tracking-tight font-semibold text-center leading-none top-0 right-0 transform',
        small
          ? 'text-xs -translate-x-2 translate-y-2'
          : '-translate-x-4 translate-y-4',
      )}
      {...props}
    >
      Poupe {content}
    </div>
  ) : null
}

export default DiscountTag
