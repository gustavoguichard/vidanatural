import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import XIcon from '@heroicons/react/outline/XIcon'

import { categories } from './navigation'

const pageGroups = [
  [
    { name: 'Contato', href: '/entre-em-contato' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre a VN', href: '/sobre-a-vida-natural' },
    { name: 'Dúvidas frequentes', href: '/faq' },
    { name: 'Quem somos?', href: '/sobre-a-vida-natural#quem-somos' },
    { name: 'Nossos ingredientes', href: '/sobre-a-vida-natural#ingredientes' },
  ],
]

type Props = { open: boolean; setOpen: (b: boolean) => void }
const MobileMenu = ({ open, setOpen }: Props) => {
  const closeMenu = () => setOpen(false)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 flex lg:hidden"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                onClick={closeMenu}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <div className="px-4 py-6 mt-2 space-y-6 border-t border-gray-200">
              {categories.map((category) => (
                <div key={category.name} className="flow-root">
                  <a
                    onClick={closeMenu}
                    href={category.href}
                    className="block p-2 -m-2 font-medium text-gray-900"
                  >
                    {category.name}
                  </a>
                </div>
              ))}
            </div>
            {pageGroups.map((pages, idx) => (
              <div
                key={`mobile-menu-sect-${idx}`}
                className="px-4 py-6 space-y-6 border-t border-gray-200"
              >
                {pages.map((page, i) => (
                  <div key={`${page.name}-${i}`} className="flow-root">
                    <a
                      onClick={closeMenu}
                      href={page.href}
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileMenu
