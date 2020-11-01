import { useRef, useEffect, useState } from 'react'
import throttle from 'lodash/throttle'

import api from 'lib/api'
import useGlobal from 'lib/use-global'

import Spinner from 'components/spinner'
import SearchItem from './search-item'

const doSearch = throttle(async (text, setResults, setFetching) => {
  setFetching(true)
  const result = await api.vnda.textSearch(text)
  setResults(result)
  setFetching(false)
}, 1300)

const SearchBar = () => {
  const [{ searchOpen }, { closeSearch }] = useGlobal()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [fetching, setFetching] = useState(false)
  const field = useRef()
  const hasQuery = query && query.length > 2

  useEffect(() => {
    if (hasQuery) {
      doSearch(query, setResults, setFetching)
    }
  }, [query])

  return searchOpen ? (
    <div
      className="fixed z-50 inset-0 bg-black bg-opacity-25 transition duration-300"
      onClick={closeSearch}
    >
      <div
        className="flex flex-col max-h-screen overflow-y-auto shadow-lg overflow-hidden relative rounded-b-lg  animate__animated animate__fadeIn animate__faster"
        onClick={(event) => event.stopPropagation()}
        onKeyUp={(event) => {
          event.key === 'Escape' && closeSearch()
        }}
      >
        <div className="relative flex justify-between items-center">
          <input
            type="text"
            autoFocus
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
        </div>
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
      </div>
    </div>
  ) : null
}

export default SearchBar
