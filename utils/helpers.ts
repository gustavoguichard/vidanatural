import isArray from 'lodash/isArray'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

export const buildQuery = (query?: object) => {
  if (isEmpty(query)) return null
  const queryString = map(query, (value, key) =>
    isArray(value)
      ? map(value, v => `${key}[]=${v}`).join('&')
      : `${key}=${value}`,
  )
  return queryString.join('&')
}

export const isClient = typeof window === 'object'

export const nl2Br = (content: string) =>
  content.replace(/(?:\r\n|\r|\n)/g, '<br />')

export const sleep = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time))
