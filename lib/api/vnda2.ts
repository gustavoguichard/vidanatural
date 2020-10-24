import isObject from 'lodash/isObject'

import { isClient } from 'lib/utils'

import { API2Response } from 'types/vnda'

const normalizeBody = (body: undefined | string | object, method: string) => {
  if (['HEAD', 'GET', 'DELETE'].includes(method)) return undefined

  return isObject(body) ? JSON.stringify(body) : body
}

const fetcher = async (
  path: string,
  method = 'GET',
  body?: string | object,
): Promise<API2Response> => {
  const host = process.env.API_HOST

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Host: host,
    Authorization: `Token token="${process.env.VNDA_API_TOKEN}"`,
  }

  const url = `https://${host}/api/v2/${path}`
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

const fetchBFFApi = async (
  path: string,
  method = 'GET',
  rawBody?: string | object,
) => {
  try {
    const fullPath =
      (isClient ? `${window.location.origin}/` : process.env.LOCAL_HOST) +
      `api/${path}`.replace('//', '/')
    const body = rawBody ? JSON.stringify(rawBody) : undefined
    const response = await fetch(fullPath, { method, body })
    return response.json()
  } catch (error) {
    return { error, status: 500 }
  }
}

export default { fetch: fetchBFFApi, fetcher }
