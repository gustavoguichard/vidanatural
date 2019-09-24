import { withRouter } from 'next/router'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { getResizedImg } from 'utils/api'
import { getOwnPath } from 'utils/api'
import { toCurrency } from 'utils/helpers'

const SearchItem = ({ router, name, image_url, url, price }) => {
  return (
    <ListItem button onClick={() => router.push(getOwnPath(url))}>
      <ListItemAvatar>
        <img src={getResizedImg(image_url, 30)} width="30" />
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

export default withRouter(SearchItem)