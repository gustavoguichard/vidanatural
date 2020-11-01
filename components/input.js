import React from 'react'
import { classes } from 'lib/utils'

const Input = ({
  text = 'gray-900',
  button,
  errorColor = 'red-600',
  focusBorder = 'teal-600',
  bg = 'white',
  label,
  type = 'text',
  name,
  error,
  className,
  required,
  wrapperClasses,
  ...props
}) => {
  const cx = classes(
    'block w-full p-4 text-lg appearance-none focus:outline-none bg-transparent rounded',
    className,
  )
  const wCx = classes(
    'flex items-center outline relative border rounded mb-4',
    {
      [`border-${errorColor}`]: error,
    },
    `focus-within:border-${focusBorder}`,
    wrapperClasses,
  )
  const Component = props.multiline ? 'textarea' : 'input'
  return (
    <>
      <div className={wCx}>
        <Component
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
