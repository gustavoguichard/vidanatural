import { useRef, useEffect, useState } from 'react'
import throttle from 'lodash/throttle'
import {
  CircularProgress,
  InputBase,
  Divider,
  List,
  ListSubheader,
  Card,
} from '@material-ui/core'
import useGlobal from 'utils/useGlobal'
import { descend } from 'src/css/animations'
import SearchItem from 'src/ui/header/SearchItem'
import theme from 'src/ui/theme'
import api from 'utils/api'

const doSearch = throttle(async (text, setResults, setFetching) => {
  setFetching(true)
  const result = await api.textSearch(text)
  setResults(result)
  setFetching(false)
}, 1300)

const SearchBar = () => {
  const [{ searchOpen }, { closeSearch }] = useGlobal()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [fetching, setFetching] = useState(false)
  const field = useRef()
  const radius = `${theme.shape.borderRadius}px`
  const hasQuery = query && query.length > 2

  useEffect(() => {
    if (hasQuery) {
      doSearch(query, setResults, setFetching)
    }
  }, [query])

  return searchOpen ? (
    <div
      css={{
        position: 'fixed',
        zIndex: 10000,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
        transition: 'all .3s',
      }}
      onClick={closeSearch}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          position: 'relative',
          animation: `${descend} .3s ease-out`,
        }}
        onClick={event => event.stopPropagation()}
        onKeyUp={event => {
          event.key === 'Escape' && closeSearch()
        }}
      >
        <Card
          css={{
            borderRadius: `0 0 ${radius} ${radius}`,
          }}
        >
          <InputBase
            autoFocus
            id="search-field"
            ref={field}
            css={{ background: 'white', padding: 20, width: '100%' }}
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'search' }}
            onChange={ev => setQuery(ev.target.value)}
          />
          {fetching && (
            <CircularProgress
              size={25}
              color="inherit"
              css={{
                position: 'absolute',
                top: 5,
                right: 5,
                pointerEvents: 'none',
              }}
            />
          )}
          {(hasQuery || !!results.length) && (
            <>
              <Divider />
              <List>
                {results.length ? (
                  results.map(item => <SearchItem key={item.id} {...item} />)
                ) : (
                  <ListSubheader color="inherit">
                    Nenhum resultado similar
                  </ListSubheader>
                )}
              </List>
            </>
          )}
        </Card>
      </div>
    </div>
  ) : null
}

export default SearchBar
