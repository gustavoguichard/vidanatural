import Img from 'components/img'
import { compose, shuffle, take } from 'lodash/fp'
import { memo } from 'react'

const incentives = [
  {
    name: 'Alta eficiência',
    imageSrc: '/static/icons/alta-eficiencia.png',
    tags: ['home', 'desodorante'],
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: 'Fórmulas minimalistas',
    imageSrc: '/static/icons/formula-minimalista.png',
    tags: ['home', 'desodorante', 'higiene'],
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Seguro pro Planeta',
    imageSrc: '/static/icons/seguro-pro-planeta.png',
    tags: ['home', 'desodorante', 'higiene', 'hidratante'],
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
  {
    name: 'Ingredientes seguros',
    imageSrc: '/static/icons/ingredientes-seguros.png',
    tags: ['home', 'desodorante', 'higiene', 'hidratante'],
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
  {
    name: 'Feito à mão',
    imageSrc: '/static/icons/feito-a-mao.png',
    tags: ['home', 'desodorante', 'higiene', 'hidratante'],
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
  {
    name: 'Entregamos para todo o Brasil',
    imageSrc: '/static/icons/entregamos.png',
    tags: ['home'],
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
]

const Incentives = () => {
  const sorted: typeof incentives = compose(take(3), shuffle)(incentives)
  return (
    <div className="text-center bg-gray-50">
      <div className="py-6 mx-auto max-w-7xl sm:px-2 lg:px-4">
        <div className="max-w-2xl px-4 mx-auto lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {sorted.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <Img
                    className="w-16 h-16 mx-auto"
                    src={incentive.imageSrc}
                    alt={incentive.name}
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Incentives)
