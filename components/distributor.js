import capitalize from 'lodash/capitalize'
import { FiMapPin, FiPhone, FiLink } from 'react-icons/fi'

const titleCase = (string) => string.split(' ').map(capitalize).join(' ')

const LinkInfo = ({ Icon, children, ...props }) => (
  <p>
    <a
      className="text-gray-500 hover:underline text-sm inline-flex items-center hover:text-teal-600"
      target="_blank"
      rel="noreferrer noopener"
      {...props}
    >
      <Icon className="w-3 mr-1 text-gray-600" /> {children}
    </a>
  </p>
)

const Distributor = ({ place }) => {
  return (
    <div className="pb-3">
      <h6 className="font-semibold leading-snug text-gray-600">
        {titleCase(place.name)}
      </h6>
      <LinkInfo
        title="Ver no mapa"
        href={`https://www.google.com.br/maps/place/${place.fullAddress}`}
        Icon={FiMapPin}
      >
        {place.address}
      </LinkInfo>
      {place.phone && (
        <p className="text-gray-500 text-sm inline-flex items-center">
          <FiPhone className="w-3 mr-1 text-gray-600" /> {place.phone}
        </p>
      )}
      {place.url && (
        <LinkInfo
          href={place.url}
          title={`Ir para o site de ${place.name}`}
          Icon={FiLink}
        >
          {place.url}
        </LinkInfo>
      )}
    </div>
  )
}

export default Distributor
