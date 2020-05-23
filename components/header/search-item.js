import { useRouter } from 'next/router'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'

import api from 'lib/api'

import PriceTag from 'components/products/price-tag'

const SearchItem = ({
  name,
  closeSearch,
  image_url,
  price,
  slug,
  sale_price,
}) => {
  const router = useRouter()
  return (
    <ListItem
      button
      onClick={async () => {
        await router.push('/produtos/[slug]', `/produtos/${slug}`)
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
        {sale_price && (
          <PriceTag
            variant="caption"
            component="span"
            lineBreak={false}
            item={{ price, sale_price }}
          />
        )}
      </ListItemText>
    </ListItem>
  )
}

export default SearchItem
