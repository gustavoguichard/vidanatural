import useGlobal from 'lib/use-global'
import { toCurrency } from 'lib/utils'

const ShopConditions = () => {
  const [{ freeShippingPrice }] = useGlobal()
  const offers = [
    {
      name: `Para compras acima de ${toCurrency(freeShippingPrice)}`,
      description: 'Frete grátis',
    },
    {
      name: 'Pagamento em boleto, PIX ou cartão',
      description: 'Em até 6x',
    },
    {
      name: 'Inscreva-se na nossa newsletter',
      description: '15% de desconto na primeira compra',
    },
  ]
  return (
    <div className="bg-white sm:order-first">
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <nav aria-label="Offers" className="order-last lg:order-first">
          <div className="mx-auto max-w-7xl lg:px-8">
            <ul className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
              {offers.map((offer) => (
                <li
                  key={offer.name}
                  className="relative flex flex-col justify-center flex-1 px-4 py-3 text-center bg-white sm:py-4 focus:z-10"
                >
                  <p className="text-sm text-gray-500">{offer.name}</p>
                  <p className="font-semibold text-gray-900">
                    {offer.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default ShopConditions
