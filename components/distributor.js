import map from 'lodash/map'
import { Box, Typography } from '@material-ui/core'
import { OpenInNew, Place } from '@material-ui/icons'

import theme from 'lib/theme'

const InfoDisplay = ({ title, children }) =>
  children ? (
    <Typography variany="body2">
      <strong>{title}:</strong> {children}
      <br />
    </Typography>
  ) : null

const LinkInfo = ({ Icon, children, ...props }) => (
  <a
    css={{
      color: theme.palette.secondary.main,
    }}
    target="_blank"
    rel="noreferrer noopener"
    {...props}
  >
    {children}{' '}
    <Icon
      css={{
        width: 16,
        position: 'absolute',
        marginLeft: 5,
      }}
    />
  </a>
)

const Distributor = ({ place }) => (
  <Box py={2}>
    <Typography variant="body1">
      <strong>{place.name}</strong>
    </Typography>
    <Typography component="div" variany="body2">
      {map(place.address, (addr, index) => (
        <div key={`addr-${addr}`}>
          <LinkInfo
            title="Ver no mapa"
            href={`https://www.google.com.br/maps/place/${place.fullAddress[index]}`}
            Icon={Place}
          >
            {addr}
          </LinkInfo>
        </div>
      ))}
    </Typography>
    <InfoDisplay title="telefone">{place.phone}</InfoDisplay>
    <InfoDisplay title="website">
      {place.url ? (
        <LinkInfo
          href={place.url}
          title={`Ir para o site de ${place.name}`}
          Icon={OpenInNew}
        >
          {place.url}
        </LinkInfo>
      ) : null}
    </InfoDisplay>
  </Box>
)

export default Distributor
