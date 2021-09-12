type Props = { children: React.ReactNode }
const Badge = ({ children }: Props) => {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-nature-100 text-nature-800">
      <svg
        className="mr-1.5 h-2 w-2 text-nature-400"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
      {children}
    </span>
  )
}

export default Badge
