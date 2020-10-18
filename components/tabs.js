import times from 'lodash/times'

import { classes } from 'lib/utils'

const Tabs = ({ current, size, handleChange }) => (
  <div className="text-green-600 text-center">
    {times(size, (idx) => {
      const cx = classes('font-semibold px-4 py-2 border-b-2', {
        'border-green-600': current === idx,
        'border-transparent': current !== idx,
      })
      return (
        <button
          type="button"
          onClick={() => handleChange(idx)}
          key={`idxex-${idx}`}
          className={cx}
        >
          {idx + 1}
        </button>
      )
    })}
  </div>
)

export default Tabs
