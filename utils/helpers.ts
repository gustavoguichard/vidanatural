import compact from 'lodash/compact'
import isArray from 'lodash/isArray'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import toPairs from 'lodash/toPairs'
import accounting from 'accounting'

accounting.settings = {
  currency: {
    symbol: 'R$',
    format: '%s %v',
    decimal: ',',
    thousand: '.',
    precision: 2,
  },
  number: {
    precision: 0,
    decimal: ',',
    thousand: '.',
  },
}

export const toCurrency = (n: number) => accounting.formatMoney(+n)

export const buildQuery = (query?: object) => {
  if (isEmpty(query)) return null
  const queryString = map(query, (value, key) =>
    isArray(value)
      ? map(value, v => `${key}[]=${v}`).join('&')
      : `${key}=${value}`,
  )
  return queryString.join('&')
}

export function clipString(text: string, size = 35) {
  const { length } = text
  const first = Math.max(0, Math.floor((size - 3) / 2))
  const last = Math.max(0, Math.ceil(length - first))
  return length < size ? text : `${text.slice(0, first)}...${text.slice(last)}`
}

export const joinWith = (args: any[], mark = '') => compact(args).join(mark)

export const isClient = typeof window === 'object'

export const isOdd = (num: number) => num % 2

export const nl2Br = (content: string) =>
  content.replace(/(?:\r\n|\r|\n)/g, '<br />')

export const sleep = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time))

export const parseCookies = (cookieString = ''): object => {
  return cookieString.split(';').reduce((res, c) => {
    const [key, val] = c
      .trim()
      .split('=')
      .map(decodeURIComponent)
    const allNumbers = (str: string) => /^\d+$/.test(str)
    try {
      return Object.assign(res, {
        [key]: allNumbers(val) ? val : JSON.parse(val),
      })
    } catch (e) {
      return Object.assign(res, { [key]: val })
    }
  }, {})
}

export const encodeCookies = (obj: object): string => {
  const pairs = map(toPairs(obj), pair => {
    const encoded = encodeURIComponent(pair[1])
    return [pair[0], encoded].join('=')
  })
  return pairs.join('; ')
}
