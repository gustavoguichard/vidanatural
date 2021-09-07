import api from 'lib/api'

import Link from 'components/link'
import PriceTag from 'components/products/price-tag'

const SearchItem = ({ onClick, name, image_url, price, sale_price, url }) => (
  <Link
    onClick={onClick}
    href={api.vnda.utils.getOwnPath(url)}
    className="flex p-3 space-x-3 text-gray-700 transition duration-300 place-items-center hover:bg-gray-100"
  >
    {image_url ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={name}
        src={api.vnda.utils.getResizedImg(image_url, 60)}
        width="60"
      />
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
