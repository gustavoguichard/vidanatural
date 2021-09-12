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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(searchCB, [query])

  return (
    <Transition
      show={searchOpen}
      enter="transition-opacity ease-in duration-200"
      leave="delay-200 transition-opacity ease-in duration-200"
      hidden="opacity-0"
      shown="opacity-100"
      className="fixed inset-0 z-50 transition-all duration-300 bg-black/30"
      onClick={closeSearch}
    >
      <Transition.Child
        className="relative flex flex-col max-h-screen overflow-hidden overflow-y-auto rounded-b-lg shadow-lg"
        enter="delay-200 transition-all ease-in-out duration-100"
        leave="transition-all ease-in-out duration-100"
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
          className="relative flex items-center justify-between"
        >
          <input
            type="search"
            autoComplete="off_hack"
            name="search"
            spellCheck="false"
            id="search-field"
            ref={field}
            className="w-full p-6 bg-white"
            placeholder="Buscar..."
            aria-label="search"
            onChange={(ev) => setQuery(ev.target.value)}
          />
          {fetching && (
            <Spinner
              color="text-black"
              size={8}
              className="absolute right-0 mr-3 pointer-events-none"
            />
          )}
        </form>
        {(hasQuery || !!results.length) && (
          <div className="bg-white divide-y divide-gray-200">
            {results.length ? (
              results.map((item) => (
                <SearchItem key={item.id} onClick={closeSearch} {...item} />
              ))
            ) : (
              <p className="p-5 text-sm font-semibold text-gray-700">
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
