import { useRouter } from 'next/router'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'
import api from 'lib/api'
import { toCurrency } from 'lib/utils'

const CartItem = ({
  product_name,
  image_url,
  product_url,
  total,
  price,
  quantity,
}) => {
  const router = useRouter()
  const fixedUrl = product_url.replace('/produto/', '/produtos/')
  const path = api.vnda.getOwnPath(fixedUrl)
  return (
    <ListItem button onClick={() => router.push('/produtos/[slug]', path)}>
      <ListItemAvatar>
        <img
          alt={product_name}
          src={api.vnda.getResizedImg(image_url, 30)}
          width="30"
        />
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="body2">{product_name}</Typography>
        <Typography component="span" variant="caption">
          {quantity > 1 ? `${quantity} x ${toCurrency(price)} = ` : null}
          <strong>{toCurrency(total)}</strong>
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

export default CartItem
