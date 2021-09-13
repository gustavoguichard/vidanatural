import { ChevronRightIcon } from '@heroicons/react/solid'
import {
  BookmarkAltIcon,
  BookOpenIcon,
  RssIcon,
  ViewListIcon,
} from '@heroicons/react/outline'

import EcommerceLayout from 'layouts/ecommerce'
import Link from 'components/link'

const links = [
  {
    title: 'Produtos',
    description: 'Nossa loja virtual com todos os produtos que produzimos',
    icon: BookOpenIcon,
  },
  {
    title: 'Contato',
    description: 'Fale com a gente ou descubra onde estamos',
    icon: BookmarkAltIcon,
  },
  {
    title: 'Dúvidas Frequentes',
    description:
      'Sua dúvida pode já ter sido dúvida de outrem, por isso separamos algumas respostas aqui',
    icon: ViewListIcon,
  },
  {
    title: 'Blog',
    description:
      'Cosmética natural, produtos orgânicos, veganos, artesanais e dicas de estilo de Vida Natural',
    icon: RssIcon,
  },
]

const ErrorPage = () => {
  return (
    <div className="bg-white">
      <main className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl py-16 mx-auto sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide uppercase text-secondary-600">
              Erro 404
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Essa página não existe.
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Foi mal, não conseguimos encontrar a página que você buscava.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Página populares
            </h2>
            <ul
              role="list"
              className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative flex items-start py-6 space-x-4"
                >
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary-50">
                      <link.icon
                        className="w-6 h-6 text-secondary-700"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm">
                        <Link href="#">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </Link>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="self-center flex-shrink-0">
                    <ChevronRightIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/"
                className="text-base font-medium group text-secondary-600 hover:text-secondary-500"
              >
                Ou vá para a home
                <span
                  aria-hidden="true"
                  className="inline-block transition group-hover:translate-x-1"
                >
                  {' '}
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

ErrorPage.getLayout = EcommerceLayout
export default ErrorPage
