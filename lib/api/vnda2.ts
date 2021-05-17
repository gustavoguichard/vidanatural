import isObject from 'lodash/isObject'

import type { API2Response } from 'types/vnda'

const normalizeBody = (body: undefined | string | object, method: string) => {
  if (['HEAD', 'GET', 'DELETE'].includes(method)) return undefined

  return isObject(body) ? JSON.stringify(body) : body
}

const fetcher = async (
  path: string,
  method = 'GET',
  body?: string | object,
  givenHeaders?: Record<string, string>,
): Promise<API2Response> => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Host: process.env.API_HOST,
    Authorization: `Token token="${process.env.VNDA_API_TOKEN}"`,
    ...givenHeaders,
  }

  const url = getAPIPath(path)
  const options = { headers, method, body: normalizeBody(body, method) }
  // console.log(url, options)
  const result = await fetch(url, options as RequestInit)
  try {
    const { status } = result
    if ([104, 204, 304].includes(status)) {
      return { data: {}, status }
    }
    const data = await result.json()
    if (!result.ok) {
      return { error: data.error, status }
    }
    return { data, status }
  } catch (error) {
    return { error, status: 500 }
  }
}

const getAPIPath = (path: string, bff = false) =>
  [
    bff ? 'api/' : `https://${process.env.API_HOST}/api/v2/`,
    path.replace(/^\//, ''),
  ].join('')

const processFetch = async (
  path: string,
  method: string,
  body?: BodyInit | null,
) => {
  try {
    const response = await fetch(path, { method, body } as RequestInit)
    return response.json()
  } catch (error) {
    return { error, status: 500 }
  }
}

const clientFetchBFFApi = async (
  path: string,
  method = 'GET',
  rawBody?: object,
) => {
  const fullPath = `${window.location.origin}/` + getAPIPath(path, true)
  const body = rawBody ? JSON.stringify(rawBody) : undefined
  return processFetch(fullPath, method, body)
}

const serverFetchBFFApi = async (
  path: string,
  method = 'GET',
  body?: BodyInit | null,
) => {
  const fullPath = process.env.LOCAL_HOST + getAPIPath(path, true)
  return processFetch(fullPath, method, body)
}

export default {
  fetch: serverFetchBFFApi,
  clientFetch: clientFetchBFFApi,
  fetcher,
}
