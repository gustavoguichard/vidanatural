import Img from 'components/img'
import compose from 'lodash/fp/compose'
import shuffle from 'lodash/fp/shuffle'
import take from 'lodash/fp/take'
import { memo } from 'react'

import eficiency from '../../public/static/icons/alta-eficiencia.png'
import formula from '../../public/static/icons/formula-minimalista.png'
import safe from '../../public/static/icons/seguro-pro-planeta.png'
import ingredients from '../../public/static/icons/ingredientes-seguros.png'
import handmade from '../../public/static/icons/feito-a-mao.png'
import shipping from '../../public/static/icons/entregamos.png'

const incentives = [
  {
    name: 'Alta eficiência',
    imageSrc: eficiency,
    tags: ['home', 'desodorante'],
    description:
      'Além de seguro e ecológico, te dá o resultado que você precisa.',
  },
  {
    name: 'Fórmulas minimalistas',
    imageSrc: formula,
    tags: ['home', 'desodorante', 'higiene'],
    description:
      'O mínimo para o máximo, porque a simplicidade é encantadora e surpreendente.',
  },
  {
    name: 'Seguro para o Planeta',
    imageSrc: safe,
    tags: ['home', 'desodorante', 'higiene', 'hidratante'],
    description:
      'Porque esse nosso planeta é muito especial e é só um. Merece todo cuidado ❤️',
  },
  {
    name: 'Ingredientes seguros',
    imageSrc: ingredients,
    tags: ['home', 'desodorante', 'higiene', 'hidratante'],
    description:
      'Formulações livres de ingredientes questionáveis e polêmicos. Para nossa saúde, o melhor 😉',
  },
  {
    name: 'Feito à mão',
    imageSrc: handmade,
    tags: ['home', 'desodorante', 'higiene', 'hidratante'],
    description:
      'Mãos com intenção, com cuidado, com carinho. Fazendo o que acreditamos.',
  },
  {
    name: 'Entregamos para todo o Brasil',
    imageSrc: shipping,
    tags: ['home'],
    description:
      'Se você está em terras brasileiras, a gente entrega para você.',
  },
]

const Incentives = () => {
  const sorted: typeof incentives = compose(take(4), shuffle)(incentives)
  return (
    <div className="text-center bg-gray-50">
      <div className="py-6 mx-auto max-w-7xl sm:px-2 lg:px-4">
        <div className="max-w-2xl px-4 mx-auto lg:max-w-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 lg:grid-cols-3">
            {sorted.map((incentive) => (
              <div
                key={incentive.name}
                className="flex flex-col items-center last:hidden sm:last:flex lg:last:hidden"
              >
                <div className="flow-root">
                  <Img
                    placeholder="blur"
                    className="w-16 h-16 mx-auto"
                    src={incentive.imageSrc}
                    alt={incentive.name}
                  />
                </div>
                <div className="mt-4 lg:mt-6 lg:ml-0">
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
