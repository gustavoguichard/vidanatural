import { useScrollDirection } from 'lib/hooks'

const BottomCTA = ({ children }) => {
  const scrollDirection = useScrollDirection()
  return (
    <div
      className="fixed transition-all duration-500 ease-in-out right-0 left-0 z-30"
      style={{ bottom: scrollDirection === 'DOWN' ? 0 : -100 }}
    >
      {children}
    </div>
  )
}

export default BottomCTA
