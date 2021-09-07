import { FiChevronDown } from 'react-icons/fi'

import { cx } from 'lib/utils'
import { useToggle } from 'lib/hooks'

const Pannel = ({ onClick, className, children, title }) => {
  const [open, toggle] = useToggle()

  const handleClick = () => {
    toggle()
    onClick && onClick(title)
  }
  return (
    <div
      className={cx(
        className,
        '-mx-4 sm:mx-0 flex flex-col rounded bg-white border my-1 border-gray-200 transition-all duration-300',
        open && 'shadow my-4 rounded-lg',
      )}
    >
      <div
        onClick={handleClick}
        className="flex p-4 justify-between cursor-pointer"
      >
        <span className="font-semibold text-gray-600 tracking-tight">
          {title}
        </span>
        <FiChevronDown
          className={cx(
            'transition duration-200 text-xl text-gray-400',
            open && 'transform rotate-180',
          )}
        />
      </div>
      {open && <div className="px-4">{children}</div>}
    </div>
  )
}

export default Pannel
