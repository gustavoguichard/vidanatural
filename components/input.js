import { classes } from 'lib/utils'

const Input = ({
  text = 'gray-900',
  button,
  errorColor = 'red-600',
  focusBorder = 'green-500',
  bg = 'white',
  label,
  type = 'text',
  name,
  error,
  className,
  required,
  ...props
}) => {
  const cx = classes(
    'block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent rounded',
    className,
  )
  return (
    <>
      <div
        className={`flex items-center outline relative border border-${
          error ? errorColor : 'inherit'
        } focus-within:border-${focusBorder} rounded mb-4`}
      >
        <input
          required={required}
          placeholder=" "
          type={type}
          id={name}
          name={name}
          className={cx}
          {...props}
        />
        {label && (
          <label
            htmlFor={name}
            className={`absolute top-0 pointer-events-none text-${
              error ? errorColor : text
            } text-lg bg-${bg} p-4 duration-150 origin-0 rounded`}
          >
            {label}
            {required ? ' *' : ''}
          </label>
        )}
        {button && <div className="absolute right-0 mr-2">{button}</div>}
      </div>
      {error && (
        <p className={`text-${errorColor} text-sm -mt-2 px-4 mb-2`}>{error}</p>
      )}
    </>
  )
}

export default Input
