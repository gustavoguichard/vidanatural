import useGlobal from 'lib/use-global'
import { toCurrency } from 'lib/utils'

const FlashMessage = () => {
  const [{ freeShippingPrice }] = useGlobal()
  return (
    <div className="bg-salmon-600">
      <div className="flex items-center justify-center h-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-center text-white">
          Frete grátis para compras acima de {toCurrency(freeShippingPrice)}
        </p>
      </div>
    </div>
  )
}

export default FlashMessage
