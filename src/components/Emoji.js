const Emoji = ({ label, symbol }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label || ''}
    aria-hidden={!label}
  >
    {symbol}
  </span>
)
export default Emoji
