import { useEffect, useRef } from 'react'
import { withRouter } from 'next/router'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { getResizedImg } from 'utils/api'
import { getOwnPath } from 'utils/api'
import theme from 'src/ui/theme'

const CartItem = ({ router, product_name, image_url, product_url, total }) => {
  return (
    <ListItem button onClick={() => router.push(getOwnPath(product_url))}>
      <ListItemAvatar>
        <img src={getResizedImg(image_url, 30)} width="30" />
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="body2">{product_name}</Typography>
        <Typography component="span" variant="caption">
          R$ {total}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

export default withRouter(CartItem)
