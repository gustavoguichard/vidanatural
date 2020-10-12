import map from 'lodash/map'
import { FaAngleDown } from 'react-icons/fa'

import { classes } from 'lib/utils'
import { useToggle } from 'lib/hooks'

import Distributor from 'components/distributor'

const StatePannel = ({ region, title }) => {
  const [open, toggle] = useToggle()

  const cx = classes('transition duration-200', {
    'transform rotate-180': open,
  })
  const wCx = classes('border border-gray-200', { 'shadow my-4': open })
  return (
    <div className={wCx}>
      <div
        onClick={toggle}
        className="flex p-4 justify-between cursor-pointer"
        aria-controls={`state-${title}`}
      >
        <span>{title}</span>
        <FaAngleDown className={cx} />
      </div>
      {open && (
        <div className="divide-y space-y-4 px-4">
          {map(region, (places, name) => (
            <div key={`place-${name}`} className="first:pt-0 pt-6 pb-2">
              <h4 className="text-xl mb-2">{name}</h4>
              {map(places, (place) => (
                <Distributor place={place} key={place.name} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default StatePannel
