import { useState } from 'react'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/outline'

import Logo from './logo'
import MobileMenu from './mobile-menu'
import useGlobal from 'lib/use-global'
import Link from 'components/link'

export const navigation = {
  categories: [
    {
      name: 'Kits',
      href: '#',
      featured: [],
      collection: [],
      categories: [],
      brands: [],
    },
    {
      name: 'Desodorantes',
      href: '#',
      featured: [],
      collection: [],
      categories: [],
      brands: [],
    },
    {
      name: 'Hidratantes',
      href: '#',
      featured: [],
      collection: [],
      categories: [],
      brands: [],
    },
    {
      name: 'Higiene',
      href: '#',
      featured: [],
      collection: [],
      categories: [],
      brands: [],
    },
  ],
  pages: [
    { name: 'Sobre a VN', href: '#' },
    { name: 'Lojas', href: '#' },
  ],
}

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const [, actions] = useGlobal()
  return (
    <div className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <MobileMenu open={open} setOpen={setOpen} />
      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-12 sm:h-16">
                <div className="hidden lg:flex lg:items-center">
                  <Logo />
                </div>
                <div className="hidden h-full lg:flex">
                  <div className="flex ml-6 space-x-4">
                    {[...navigation.categories, ...navigation.pages].map(
                      ({ href, name }) => (
                        <a
                          key={name}
                          href={href}
                          className="relative z-10 flex items-center px-2 text-sm font-medium text-gray-700 transition-colors duration-200 ease-out border-b-2 border-transparent hover:text-gray-800"
                        >
                          {name}
                        </a>
                      ),
                    )}
                  </div>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex items-center flex-1 lg:hidden">
                  <button
                    type="button"
                    className="p-2 -ml-2 text-gray-400 bg-white rounded-md"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Abrir menu</span>
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <a
                    href="#"
                    className="p-2 ml-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Buscar</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <div className="lg:hidden">
                  <Logo />
                </div>

                <div className="flex items-center justify-end flex-1">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <button
                          onClick={actions.openSearch}
                          className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Buscar</span>
                          <SearchIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="flex">
                        <a
                          href="#"
                          className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Minha conta</span>
                          <UserIcon className="w-6 h-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <span
                      className="w-px h-6 mx-4 bg-gray-200 lg:mx-6"
                      aria-hidden="true"
                    />

                    <div className="flow-root">
                      <Link
                        href="#"
                        onClick={(ev: React.MouseEvent) => {
                          ev.preventDefault()
                          actions.openCart()
                        }}
                        className="flex items-center p-2 -m-2 group"
                      >
                        <ShoppingCartIcon
                          className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          0
                        </span>
                        <span className="sr-only">
                          produtos adicionados, ver carrinho
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navigation
