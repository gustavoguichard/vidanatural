import * as propTypes from 'types/prop-types'

export const widthInPixels = (width, container) => {
  const isPercent = propTypes.regex.test(String(width))
  if (container) {
    const { width: containerWidth } = container.getBoundingClientRect()
    if (isPercent) {
      const percent = Number(width.slice(0, -1)) / 100
      return { width: containerWidth * percent, containerWidth }
    }
    return { width, containerWidth }
  }
  return { width, containerWidth: width }
}

export const scrollToPage = (el, width, page, perPage) => {
  el.scroll({ left: width * page * perPage, behavior: 'smooth' })
}

export const calculatePages = (count, itemWidth) => (container) => {
  const { width, containerWidth } = widthInPixels(itemWidth, container)
  const perPage = Math.floor(containerWidth / width)
  const total = count / perPage
  return { perPage, total, width }
}
