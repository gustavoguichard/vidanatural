import { classes } from 'lib/utils'
import { getDiscount } from 'lib/domain'

const DiscountTag = ({ product, small, ...props }) => {
  const content = getDiscount(product)

  const cx = classes(
    'absolute flex justify-center items-center p-2 z-20 bg-white border border-gray-200 rounded tracking-tight font-semibold text-center leading-none top-0 right-0 transform',
    {
      '-translate-x-4 translate-y-4': !small,
      'text-xs -translate-x-2 translate-y-2': small,
    },
  )
  return product.discount_rule ? (
    <div className={cx} {...props}>
      Poupe {content}
    </div>
  ) : null
}

export default DiscountTag
