import map from 'lodash/map'
import { FaMapPin, FaExternalLinkAlt } from 'react-icons/fa'

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

const Distributor = ({ place }) => (
  <div className="pb-3">
    <h6 className="font-semibold text-lg tracking-tight">{place.name}</h6>
    {map(place.address, (addr, index) => (
      <div key={`addr-${addr}`}>
        <LinkInfo
          title="Ver no mapa"
          href={`https://www.google.com.br/maps/place/${place.fullAddress[index]}`}
          Icon={FaMapPin}
        >
          {addr}
        </LinkInfo>
      </div>
    ))}
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

export default Distributor
