import compact from 'lodash/compact'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import map from 'lodash/map'
import take from 'lodash/take'
import words from 'lodash/words'
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

export const toCurrency = (n: number = 0) =>
  accounting.formatMoney(+n).replace(',00', '')

export const joinWith = (args: unknown[], mark = '') => compact(args).join(mark)

export const isClient = typeof window === 'object'

export const isOdd = (num: number) => num % 2

export const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

export const getReadTime = (text: string) => {
  const AVG_WORDS_PER_MINUTE = 265
  const totalWords = words(text)
  const minutes = totalWords.length / AVG_WORDS_PER_MINUTE
  return Math.ceil(minutes)
}

export function clipSentence(text: string, size = 5) {
  const wordsArray = words(text)
  const shouldClip = wordsArray.length > size
  const sentence = shouldClip ? take(wordsArray, size).join(' ') : text
  return shouldClip ? `${sentence}...` : sentence
}

type possibleValues = string | possibleValues[] | object
export function classes(...args: possibleValues[]): string {
  const result = map(args, (rule) => {
    if (isArray(rule)) {
      return classes(...rule)
    }
    if (isObject(rule)) {
      return classes(map(rule, (value, key) => (value ? key : false)))
    }
    return typeof rule === 'string' ? rule : false
  })
  return result.filter((rule) => rule).join(' ')
}
