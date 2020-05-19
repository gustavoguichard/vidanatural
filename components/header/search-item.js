import { useRouter } from 'next/router'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'

const SearchItem = ({ name, closeSearch, image_url, url, price }) => {
  const router = useRouter()
  return (
    <ListItem
      button
      onClick={async () => {
        await router.push(
          '/produtos/[slug]',
          url.replace('/produto/', '/produtos/'),
        )
        closeSearch()
      }}
    >
      <ListItemAvatar>
        <img
          alt={name}
          src={api.vnda.getResizedImg(image_url, 30)}
          width="30"
        />
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="body2">{name}</Typography>
        {price && (
          <Typography component="span" variant="caption">
            {toCurrency(price)}
          </Typography>
        )}
      </ListItemText>
    </ListItem>
  )
}

export default SearchItem
