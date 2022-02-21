import { useState } from 'react'
import MenuIcon from '@heroicons/react/outline/MenuIcon'
import SearchIcon from '@heroicons/react/outline/SearchIcon'

import Logo from './logo'
import MobileMenu from './mobile-menu'
import useGlobal from 'lib/use-global'
import Link from 'components/link'

const categories = [
  {
    name: 'Kits',
    href: '/produtos?filter=kit',
    featured: [],
    collection: [],
    categories: [],
    brands: [],
  },
  {
    name: 'Desodorantes',
    href: '/produtos?filter=desodorante',
    featured: [],
    collection: [],
    categories: [],
    brands: [],
  },
  {
    name: 'Hidratantes',
    href: '/produtos?filter=hidratante',
    featured: [],
    collection: [],
    categories: [],
    brands: [],
  },
  {
    name: 'Higiene',
    href: '/produtos?filter=higiene',
    featured: [],
    collection: [],
    categories: [],
    brands: [],
  },
]

const pages = [
  { name: 'Sobre a VN', href: '/sobre-a-vida-natural' },
  { name: 'Blog', href: '/blog' },
]

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
                <div className="hidden lg:flex lg:items-center opacity-70">
                  <Logo />
                </div>
                <div className="hidden h-full lg:flex">
                  <div className="flex ml-6 space-x-4">
                    {[...categories, ...pages].map(({ href, name }) => (
                      <Link
                        key={name}
                        href={href}
                        className="relative z-10 flex items-center px-2 text-sm font-medium text-gray-700 transition-colors duration-200 ease-out border-b-2 border-transparent hover:text-gray-800"
                      >
                        {name}
                      </Link>
                    ))}
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
                  <button
                    onClick={actions.openSearch}
                    className="p-2 ml-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Buscar</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Logo (lg-) */}
                <div className="flex lg:hidden opacity-70">
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

export { categories }
export default Navigation
