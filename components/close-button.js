import { cx } from 'lib/utils'

const CloseButton = ({ className, size = 5, onClick }) => (
  <button
    type="button"
    className={cx(
      className,
      'flex p-2 rounded-md hover:bg-gray-400/25 focus:outline-none focus:ring focus:bg-gray-400/25 transition duration-150',
    )}
    aria-label="Dismiss"
    onClick={onClick}
  >
    <svg
      className={`h-${size} w-${size}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
)

export default CloseButton
