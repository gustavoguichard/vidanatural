import words from 'lodash/words'
import {
  compose,
  reject,
  isNil,
  isBoolean,
  flatten,
  join,
  trim,
} from 'lodash/fp'

import accounting from 'accounting'

accounting.settings = {
  currency: {
    symbol: 'R$',
    format: '%s%v',
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

const toCurrency = (n: number = 0) =>
  accounting.formatMoney(+n).replace(',00', '')

const isClient = typeof window === 'object'

const getReadTime = (text: string) => {
  const AVG_WORDS_PER_MINUTE = 265
  const totalWords = words(text)
  const minutes = totalWords.length / AVG_WORDS_PER_MINUTE
  return Math.ceil(minutes)
}

const cx = (...args: unknown[]) =>
  compose(trim, join(' '), reject(isBoolean), reject(isNil), flatten)(args)

export { cx, getReadTime, isClient, toCurrency }
