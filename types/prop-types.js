export const regex = new RegExp(/^(((([0-9]){1,2}(\.[0-9]+)?)|(100))%)/)

export const percent = (value, key, componentName, _location, propFullName) => {
  if (regex.test(value[key])) {
    return undefined
  }
  return new Error(
    `Invalid prop ${propFullName} supplied to ${componentName}. Validation failed.`
  )
}
