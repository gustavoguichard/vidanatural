import capitalize from 'lodash/capitalize'
import { FaMapMarkerAlt, FaPhoneAlt, FaExternalLinkAlt } from 'react-icons/fa'

const titleCase = (string) => string.split(' ').map(capitalize).join(' ')

const LinkInfo = ({ Icon, children, ...props }) => (
  <a
    className="text-gray-500 hover:underline text-sm inline-flex items-center hover:text-teal-600"
    target="_blank"
    rel="noreferrer noopener"
    {...props}
  >
    <Icon className="w-3 mr-1 text-gray-600" /> {children}
  </a>
)

const Distributor = ({ place }) => {
  return (
    <div className="pb-3">
      <h6 className="font-semibold leading-snug text-gray-600">
        {titleCase(place.name)}
      </h6>
      <div>
        <LinkInfo
          title="Ver no mapa"
          href={`https://www.google.com.br/maps/place/${place.fullAddress}`}
          Icon={FaMapMarkerAlt}
        >
          {place.address}
        </LinkInfo>
      </div>
      {place.phone && (
        <p className="text-gray-500 text-sm inline-flex items-center">
          <FaPhoneAlt className="w-3 mr-1 text-gray-600" /> {place.phone}
        </p>
      )}
      {place.url && (
        <LinkInfo
          href={place.url}
          title={`Ir para o site de ${place.name}`}
          Icon={FaExternalLinkAlt}
        >
          {place.url}
        </LinkInfo>
      )}
    </div>
  )
}

export default Distributor
