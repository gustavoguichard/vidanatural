import capitalize from 'lodash/capitalize'
import { FaMapPin, FaExternalLinkAlt } from 'react-icons/fa'

const titleCase = (string) => string.split(' ').map(capitalize).join(' ')

const InfoDisplay = ({ title, children }) =>
  children ? (
    <p>
      <strong>{title}:</strong> {children}
    </p>
  ) : null

const LinkInfo = ({ Icon, children, ...props }) => (
  <a
    className="underline inline-flex items-center hover:text-teal-600"
    target="_blank"
    rel="noreferrer noopener"
    {...props}
  >
    {children} <Icon className="w-3 ml-2" />
  </a>
)

const Distributor = ({ place }) => {
  return (
    <div className="pb-3">
      <h6 className="font-semibold text-lg tracking-tight">
        {titleCase(place.name)}
      </h6>
      <div>
        <LinkInfo
          title="Ver no mapa"
          href={`https://www.google.com.br/maps/place/${place.fullAddress}`}
          Icon={FaMapPin}
        >
          {place.address}
        </LinkInfo>
      </div>
      <InfoDisplay title="telefone">{place.phone}</InfoDisplay>
      <InfoDisplay title="website">
        {place.url ? (
          <LinkInfo
            href={place.url}
            title={`Ir para o site de ${place.name}`}
            Icon={FaExternalLinkAlt}
          >
            {place.url}
          </LinkInfo>
        ) : null}
      </InfoDisplay>
    </div>
  )
}

export default Distributor
