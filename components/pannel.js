/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FiChevronDown } from 'react-icons/fi'

import { classes } from 'lib/utils'
import { useToggle } from 'lib/hooks'

const Pannel = ({ onClick, className, children, title }) => {
  const [open, toggle] = useToggle()

  const cx = classes('transition duration-200 text-xl text-gray-400', {
    'rotate-180': open,
  })
  const wCx = classes(
    className,
    '-mx-4 sm:mx-0 flex flex-col rounded bg-white border my-1 border-gray-200 transition-all duration-300',
    {
      'shadow my-4 rounded-lg': open,
    },
  )
  const handleClick = () => {
    toggle()
    if (onClick) onClick(title)
  }
  return (
    <div className={wCx}>
      <div
        onClick={handleClick}
        className="flex p-4 justify-between cursor-pointer"
      >
        <span className="font-semibold text-gray-600 tracking-tight">
          {title}
        </span>
        <FiChevronDown className={cx} />
      </div>
      {open && <div className="px-4">{children}</div>}
    </div>
  )
}

export default Pannel
