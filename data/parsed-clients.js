import compact from 'lodash/compact'
import filter from 'lodash/filter'
import find from 'lodash/find'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import sortBy from 'lodash/sortBy'

import clients from 'data/clients'
import states from 'data/states'

const formatLink = (url) => (url.startsWith('http') ? url : `https://${url}`)

const formatted = map(clients, (client) => {
  const shortAddress = [
    compact([client['Endereço'], client['Número']]).join(', '),
  ]

  const address = [
    compact([shortAddress[0], client.Complemento, client.Bairro]).join(' - '),
  ]
  const fullAddress = address.map((addr) =>
    compact([addr, client.Cidade, client.Estado]).join(' - '),
  )
  return {
    address,
    fullAddress,
    state: client.Estado,
    city: client.Cidade,
    name: client.Fantasia || client.Nome,
    phone: compact([client.Fone, client.Celular]).join(' / '),
    url: client['Web Site'] ? formatLink(client['Web Site']) : null,
  }
})
const compoundName = (client) =>
  `${client.state} - ${client.city} - ${client.name}`
const filtered = filter(
  formatted,
  (client) => client.state && client.city && client.name,
)
const sorted = sortBy(filtered, compoundName)
const clentsByState = groupBy(sorted, 'state')
const fullName = (name) => find(states, (_, st) => st === name)

export default reduce(
  clentsByState,
  (result, cities, state) => {
    const key = fullName(state)
    return {
      ...result,
      [key]: groupBy(cities, 'city'),
    }
  },
  {},
)
