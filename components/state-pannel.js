import map from 'lodash/map'

import Distributor from 'components/distributor'
import Pannel from 'components/pannel'

const StatePannel = ({ region, title }) => (
  <Pannel title={title}>
    <div className="divide-y space-y-4">
      {map(region, (places, name) => (
        <div key={`place-${name}`} className="first:pt-0 pt-6 pb-2">
          <h4 className="text-xl font-semibold tracking-tight mb-2">{name}</h4>
          {map(places, (place) => (
            <Distributor place={place} key={place.name} />
          ))}
        </div>
      ))}
    </div>
  </Pannel>
)

export default StatePannel
