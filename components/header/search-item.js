import api from 'lib/api'

import Link from 'components/link'
import PriceTag from 'components/products/price-tag'

const SearchItem = ({ onClick, name, image_url, price, sale_price, url }) => (
  <Link
    onClick={onClick}
    href="/produto/[slug]"
    as={url}
    className="flex place-items-center p-3 space-x-3 transition duration-300 hover:bg-gray-200 text-gray-700"
  >
    {image_url ? (
      <img alt={name} src={api.vnda.getResizedImg(image_url, 60)} width="60" />
    ) : null}
    <div>
      <p className="text-sm">{name}</p>
      {sale_price && (
        <PriceTag
          variant="caption"
          inline
          lineBreak={false}
          item={{ price, sale_price }}
        />
      )}
    </div>
  </Link>
)

export default SearchItem
