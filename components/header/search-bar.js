import { useRef, useEffect, useState } from 'react'
import throttle from 'lodash/throttle'

import api from 'lib/api'
import analytics from 'lib/analytics'
import useGlobal from 'lib/use-global'

import Spinner from 'components/spinner'
import Transition from 'components/transition'
import SearchItem from './search-item'

const doSearch = throttle(async (text, setResults, setFetching) => {
  setFetching(true)
  const result = await api.vnda.endpoints.textSearch(text)
  setResults(result)
  analytics.track('Search', { text })
  setFetching(false)
}, 1300)

const SearchBar = () => {
  const [{ searchOpen }, { closeSearch }] = useGlobal()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [fetching, setFetching] = useState(false)
  const field = useRef()
  const hasQuery = query && query.trim().length > 2

  const searchCB = () => {
    hasQuery && doSearch(query, setResults, setFetching)
  }
  useEffect(searchCB, [query])

  return (
    <Transition
      show={searchOpen}
      enter="transition-opacity ease-in duration-200"
      leave="delay-200 transition-opacity ease-in duration-200"
      hidden="opacity-0"
      shown="opacity-100"
      className="fixed z-50 inset-0 bg-black bg-opacity-10 backdrop-blur-sm transition-all duration-300"
      onClick={closeSearch}
    >
      <Transition.Child
        className="flex flex-col max-h-screen overflow-y-auto shadow-lg overflow-hidden relative rounded-b-lg"
        enter="delay-200 transition-all ease-in-out duration-100 transform"
        leave="transition-all ease-in-out duration-100 transform"
        hidden="-translate-y-full"
        shown="translate-y-0"
        afterEnter={() => field.current.focus()}
        onClick={(event) => event.stopPropagation()}
        onKeyUp={(event) => {
          event.key === 'Escape' && closeSearch()
        }}
      >
        <form
          autoComplete="off_hack"
          onSubmit={(event) => {
            event.preventDefault()
            searchCB()
          }}
          action="/search"
          className="relative flex justify-between items-center"
        >
          <input
            type="search"
            autoComplete="off_hack"
            name="search"
            spellCheck="false"
            id="search-field"
            ref={field}
            className="bg-white p-6 w-full"
            placeholder="Buscar..."
            aria-label="search"
            onChange={(ev) => setQuery(ev.target.value)}
          />
          {fetching && (
            <Spinner
              color="text-black"
              size={8}
              className="absolute pointer-events-none mr-3 right-0"
            />
          )}
        </form>
        {(hasQuery || !!results.length) && (
          <div className="divide-y divide-gray-200 bg-white">
            {results.length ? (
              results.map((item) => (
                <SearchItem key={item.id} onClick={closeSearch} {...item} />
              ))
            ) : (
              <p className="p-5 font-semibold text-gray-700 text-sm">
                Nenhum resultado similar
              </p>
            )}
          </div>
        )}
      </Transition.Child>
    </Transition>
  )
}

export default SearchBar
