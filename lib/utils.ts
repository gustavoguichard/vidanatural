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

const toCurrency = (n: number = 0) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(~~n)
    .replace(/\$\s/, '$')

const toDate = (d: string, short?: boolean) => {
  const config = {
    weekday: short ? undefined : 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const
  return new Date(d).toLocaleString('pt-br', config)
}

const isClient = typeof window === 'object'

const getReadTime = (text: string) => {
  const AVG_WORDS_PER_MINUTE = 265
  const totalWords = words(text)
  const minutes = totalWords.length / AVG_WORDS_PER_MINUTE
  return Math.ceil(minutes)
}

const cx = (...args: unknown[]) =>
  compose(trim, join(' '), reject(isBoolean), reject(isNil), flatten)(args)

export { cx, getReadTime, isClient, toCurrency, toDate }
