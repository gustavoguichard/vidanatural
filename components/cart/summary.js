import { toCurrency } from 'lib/utils'

import Link from 'components/link'

const CartSummary = ({ cart, items }) => {
  const subtotal = items.reduce(
    (sum, curr) => sum + curr.variant_price * curr.quantity,
    0,
  )
  const hasDisconts = subtotal > cart.total
  return items.length ? (
    <div className="bg-gray-50 mt-2 p-4 text-sm flex flex-col">
      <p className="flex justify-between mb-1">
        <span className="font-semibold">Subtotal</span>
        <span className="font-semibold">{toCurrency(subtotal)}</span>
      </p>
      {hasDisconts && (
        <p className="flex justify-between mb-1">
          <span className="font-semibold">Descontos</span>
          <span className="font-semibold">
            {toCurrency(-subtotal + cart.total)}
          </span>
        </p>
      )}
      <p className="text-xs my-1 text-gray-500">
        Promoções e custos com frete serão calculados na finalização da compra.
      </p>
      <p className="text-xs text-gray-700">
        Ao prosseguir para a finalização da compra eu concordo que tenho
        conhecimento dos{' '}
        <Link
          href="/termos-e-condicoes"
          className="underline hover:text-teal-600"
        >
          Termos e condições
        </Link>
        .
      </p>
    </div>
  ) : null
}

export default CartSummary
