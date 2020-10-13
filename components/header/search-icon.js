import { FaSearch } from 'react-icons/fa'

import useGlobal from 'lib/use-global'

import IconButton from 'components/icon-button'

const SearchIcon = () => {
  const [, { openSearch }] = useGlobal()
  return (
    <IconButton onClick={openSearch}>
      <FaSearch />
    </IconButton>
  )
}

export default SearchIcon
