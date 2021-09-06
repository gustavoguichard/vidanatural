import times from 'lodash/times'

import { cx } from 'lib/utils'

import Link from 'components/link'

const Pagination = ({ page, count, path = '/', className }) =>
  count > 1 ? (
    <div className={cx(className, 'text-center flex')}>
      {times(count, (index) => {
        const idx = index + 1
        return (
          <Link
            type="button"
            href={idx === 1 ? path : `${path}/page/${idx}`}
            key={`page-index-${idx}`}
            className={cx(
              'flex mx-1 justify-center items-center rounded-full h-8 w-8 p-2 hover:bg-gray-100',
              page === idx && 'bg-gray-900 text-white'
            )}
          >
            {idx}
          </Link>
        )
      })}
    </div>
  ) : null

export default Pagination
