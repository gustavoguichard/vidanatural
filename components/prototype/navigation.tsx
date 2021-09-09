import { useState } from 'react'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/outline'

import Logo from './logo'
import MobileMenu from './mobile-menu'

export const navigation = {
  categories: [
    {
      name: 'Kits',
      href: '#',
      featured: [{ name: 'Sleep', href: '#' }],
      collection: [{ name: 'Everything', href: '#' }],
      categories: [{ name: 'Basic Tees', href: '#' }],
      brands: [{ name: 'Full Nelson', href: '#' }],
    },
    {
      name: 'Desodorantes',
      href: '#',
      featured: [{ name: 'Sleep', href: '#' }],
      collection: [{ name: 'Everything', href: '#' }],
      categories: [{ name: 'Basic Tees', href: '#' }],
      brands: [{ name: 'Full Nelson', href: '#' }],
    },
    {
      name: 'Hidratantes',
      href: '#',
      featured: [{ name: 'Casual', href: '#' }],
      collection: [{ name: 'Everything', href: '#' }],
      categories: [{ name: 'Artwork Tees', href: '#' }],
      brands: [{ name: 'Significant Other', href: '#' }],
    },
    {
      name: 'Higiene',
      href: '#',
      featured: [{ name: 'Casual', href: '#' }],
      collection: [{ name: 'Everything', href: '#' }],
      categories: [{ name: 'Artwork Tees', href: '#' }],
      brands: [{ name: 'Significant Other', href: '#' }],
    },
  ],
  pages: [
    { name: 'Sobre a VN', href: '#' },
    { name: 'Lojas', href: '#' },
  ],
}

const Navigation = () => {
  const [open, setOpen] = useState(false)
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
                        <a
                          href="#"
                          className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Search</span>
                          <SearchIcon className="w-6 h-6" aria-hidden="true" />
                        </a>
                      </div>

                      <div className="flex">
                        <a
                          href="#"
                          className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Account</span>
                          <UserIcon className="w-6 h-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <span
                      className="w-px h-6 mx-4 bg-gray-200 lg:mx-6"
                      aria-hidden="true"
                    />

                    <div className="flow-root">
                      <a href="#" className="flex items-center p-2 -m-2 group">
                        <ShoppingCartIcon
                          className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
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
