import get from 'lodash/get'

export const widthInPixels = (container) => {
  const firstChild = get(container, 'children.0')
  if (container && firstChild) {
    const { width } = firstChild.getBoundingClientRect()
    const { width: containerWidth } = container.getBoundingClientRect()
    return { width, containerWidth }
  }
  return { width: 0, containerWidth: 0 }
}

export const scrollToPage = (el, width, page, perPage) => {
  el.scroll({ left: width * page * perPage, behavior: 'smooth' })
}

export const calculatePages = (count) => (container) => {
  const { width, containerWidth } = widthInPixels(container)
  const perPage = Math.floor(containerWidth / width)
  const total = count / perPage
  return { perPage, total, width }
}
