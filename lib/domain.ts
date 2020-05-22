import moment from 'moment'
import map from 'lodash/map'
import truncate from 'lodash/truncate'

import { getReadTime } from 'lib/utils'

import { PostBody } from 'types/cms'

moment.locale('pt-br')
export const getFromDate = (date: Date | string) => moment(date).fromNow()

export const calculatePostReadTime = (body: PostBody[]) => {
  const paragraphs = body.filter((b) => b.type === 'paragraph')
  const text = map(paragraphs, 'text').join(' ')
  return `${getReadTime(text)} min`
}

export const getExcerpt = (body: PostBody[], length = 200) => {
  const paragraph = body.find((b) => b.type === 'paragraph') || { text: '' }
  return truncate(paragraph.text, { length })
}

export const isEmptyBody = (body?: PostBody[]) => {
  return !body || getExcerpt(body) === ''
}
