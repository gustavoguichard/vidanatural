const NumericStepper = ({ current, onIncrease, onDecrease }) => (
  <div className="flex shadow border bg-white text-center text-lg border-gray-200 font-semibold mr-1">
    <button
      type="button"
      className="h-full w-8 hover:bg-gray-100"
      onClick={onDecrease}
    >
      -
    </button>
    <span className="flex items-center px-1 h-full">{current}</span>
    <button
      type="button"
      className="h-full w-8 hover:bg-gray-100"
      onClick={onIncrease}
    >
      +
    </button>
  </div>
)

export default NumericStepper
