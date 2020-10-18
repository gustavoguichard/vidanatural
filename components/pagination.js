import times from 'lodash/times'

import { classes } from 'lib/utils'

import Link from 'components/link'

const Pagination = ({ page, count, path = '/', className }) => {
  const wCx = classes(className, 'text-center flex')
  return count > 1 ? (
    <div className={wCx}>
      {times(count, (index) => {
        const idx = index + 1
        const cx = classes(
          'flex mx-1 justify-center items-center rounded-full h-8 w-8 p-2 hover:bg-gray-200',
          { 'bg-gray-900 text-white': page === idx },
        )
        return (
          <Link
            type="button"
            href={idx === 1 ? path : `${path}/page/[number]`}
            as={idx === 1 ? path : `${path}/page/${idx}`}
            key={`page-index-${idx}`}
            className={cx}
          >
            {idx}
          </Link>
        )
      })}
    </div>
  ) : null
}

export default Pagination
