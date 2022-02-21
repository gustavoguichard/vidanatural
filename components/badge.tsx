import Link from 'components/link'
import { cx } from 'lib/utils'

type Props = { children: React.ReactNode; href?: string; className?: string }
const Badge = ({ children, className, href }: Props) => {
  const Component = href ? Link : 'span'
  return (
    <Component
      href={href}
      className={cx(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary-100 text-secondary-800 !no-underline',
        href && 'hover:bg-secondary-200 hover:ring-2 hover:ring-secondary-300',
        className,
      )}
    >
      <svg
        className="mr-1.5 h-2 w-2 text-secondary-400"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
      <span className="first-letter:uppercase">{children}</span>
    </Component>
  )
}

export default Badge
