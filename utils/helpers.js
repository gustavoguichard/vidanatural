import get from 'lodash/get'
import isFunction from 'lodash/isFunction'

export const nl2Br = content => content.replace(/(?:\r\n|\r|\n)/g, '<br />')

export const smoothScrolling = element => {
  const top = get(element, 'offsetTop', 0)
  window.scroll({ top, left: 0, behavior: 'smooth' })
}

export const scrollToId = id => {
  const element = document.getElementById(id)
  smoothScrolling(element)
}

export const callAll = (...fns) => (...args) =>
  fns.forEach(fn => isFunction(fn) && fn(...args))

export const callIf = (condition, fn) => (...args) => condition && fn(...args)

export const callDeep = (obj, path) => (...args) => {
  const fn = get(obj, path, obj)
  return isFunction(fn) ? fn(...args) : undefined
}

export const sleep = time => new Promise(resolve => setTimeout(resolve, time))
