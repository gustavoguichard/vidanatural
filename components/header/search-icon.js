import { FiSearch } from 'react-icons/fi'

import useGlobal from 'lib/use-global'

import IconButton from 'components/icon-button'

const SearchIcon = () => {
  const [, { openSearch }] = useGlobal()
  return (
    <IconButton aria-label="Buscar" onClick={openSearch}>
      <FiSearch />
    </IconButton>
  )
}

export default SearchIcon
