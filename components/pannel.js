import { FiChevronDown } from 'react-icons/fi'

import { classes } from 'lib/utils'
import { useToggle } from 'lib/hooks'

const Pannel = ({ className, children, title }) => {
  const [open, toggle] = useToggle()

  const cx = classes('transition duration-200', {
    'transform rotate-180': open,
  })
  const wCx = classes(
    className,
    '-mx-4 sm:mx-0 flex flex-col bg-white border border-gray-200',
    {
      'shadow my-4': open,
    },
  )
  return (
    <div className={wCx}>
      <div onClick={toggle} className="flex p-4 justify-between cursor-pointer">
        <span>{title}</span>
        <FiChevronDown className={cx} />
      </div>
      {open && <div className="px-4">{children}</div>}
    </div>
  )
}

export default Pannel
