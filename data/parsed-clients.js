import filter from 'lodash/filter'
import find from 'lodash/find'
import groupBy from 'lodash/groupBy'
import reduce from 'lodash/reduce'
import sortBy from 'lodash/sortBy'

import clients from 'data/clients'
import states from 'data/states'

const compoundName = (client) =>
  `${client.state} - ${client.city} - ${client.name}`

const filtered = filter(
  clients,
  (client) => client.state && client.city && client.name,
)

const sorted = sortBy(filtered, compoundName)
const clientsByState = groupBy(sorted, 'state')
const fullName = (name) => find(states, (_, st) => st === name)

export default reduce(
  clientsByState,
  (result, cities, state) => {
    const key = fullName(state)
    return {
      ...result,
      [key]: groupBy(cities, 'city'),
    }
  },
  {},
)
