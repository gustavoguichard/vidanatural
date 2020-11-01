import sumBy from 'lodash/sumBy'

import CloseButton from 'components/close-button'

const CartHeader = ({ actions, items }) => {
  const quantity = sumBy(items, 'quantity')
  return (
    <div className="sticky top-0 bg-white shadow-sm border-b text-sm py-1 px-4 flex items-center">
      <CloseButton onClick={actions.hideCart} />
      <p className="flex-grow ml-2 font-semibold">Seu carrinho</p>
      <span>{quantity} itens</span>
    </div>
  )
}

export default CartHeader
