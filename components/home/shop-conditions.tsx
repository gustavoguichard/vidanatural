import { toCurrency } from 'lib/utils'

const ShopConditions = () => {
  const offers = [
    {
      name: `Para as regiões Sul e Sudeste`,
      description: `Frete grátis acima de ${toCurrency(120)}`,
    },
    {
      name: 'Pagamento em boleto, PIX ou cartão',
      description: 'Em até 6x sem juros',
    },
    {
      name: 'Inscreva-se na nossa newsletter',
      description: 'Ganhe 15% de desconto',
    },
  ]
  return (
    <div className="bg-white lg:order-first">
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <nav aria-label="Offers">
          <div className="mx-auto max-w-7xl md:px-8">
            <ul className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
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
