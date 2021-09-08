import { Fragment } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import { cx } from 'lib/utils'

import { navigation } from './navigation'

const MobileMenu = ({ open, setOpen }) => {
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
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links */}
            <Tab.Group as="div" className="mt-2">
              <div className="border-b border-gray-200">
                <Tab.List className="flex px-4 -mb-px space-x-8">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className={({ selected }) =>
                        cx(
                          selected
                            ? 'text-nature-600 border-nature-600'
                            : 'text-gray-900 border-transparent',
                          'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                        )
                      }
                    >
                      {category.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                {navigation.categories.map((category, categoryIdx) => (
                  <Tab.Panel
                    key={category.name}
                    className="px-4 pt-10 pb-6 space-y-12"
                  >
                    <div className="grid items-start grid-cols-1 gap-y-10 gap-x-6">
                      <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                        <div>
                          <p
                            id={`mobile-featured-heading-${categoryIdx}`}
                            className="font-medium text-gray-900"
                          >
                            Featured
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                            className="mt-6 space-y-6"
                          >
                            {category.featured.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p
                            id="mobile-categories-heading"
                            className="font-medium text-gray-900"
                          >
                            Categories
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-categories-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.categories.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                        <div>
                          <p
                            id="mobile-collection-heading"
                            className="font-medium text-gray-900"
                          >
                            Collection
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-collection-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.collection.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p
                            id="mobile-brand-heading"
                            className="font-medium text-gray-900"
                          >
                            Brands
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-brand-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.brands.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="px-4 py-6 space-y-6 border-t border-gray-200">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="block p-2 -m-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="px-4 py-6 space-y-6 border-t border-gray-200">
              <div className="flow-root">
                <a
                  href="#"
                  className="block p-2 -m-2 font-medium text-gray-900"
                >
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="block p-2 -m-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileMenu
