import { Search } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import api from 'utils/api'
import useGlobal from 'utils/useGlobal'

const SearchIcon = () => {
  const [, { openSearch }] = useGlobal()
  return (
    <IconButton
      color="inherit"
      aria-label="Busca"
      aria-haspopup="true"
      aria-controls="search-field"
      onClick={openSearch}
    >
      <Search fontSize="inherit" css={{ fontSize: '1.35rem' }} />
    </IconButton>
  )
}

export default SearchIcon
