import utils from 'lib/api/vnda-utils'

import type { API2Response } from 'types/vnda'

const fetcher = async (
  path: string,
  method = 'GET',
  body?: string | object,
  givenHeaders?: Record<string, string>,
): Promise<API2Response> => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Host: process.env.NEXT_PUBLIC_API_DOMAIN,
    Authorization: `Token token="${process.env.VNDA_API_TOKEN}"`,
    ...givenHeaders,
  }

  const url = utils.getAPIPath(path)
  const options = { headers, method, body: utils.normalizeBody(body, method) }
  // console.log(url, options)
  // eslint-disable-next-line no-undef
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

const processFetch = async (
  path: string,
  method: string,
  // eslint-disable-next-line no-undef
  body?: BodyInit | null,
) => {
  try {
    // eslint-disable-next-line no-undef
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
  const fullPath = `${window.location.origin}/${utils.getAPIPath(path, true)}`
  const body = rawBody ? JSON.stringify(rawBody) : undefined
  return processFetch(fullPath, method, body)
}

const serverFetchBFFApi = async (
  path: string,
  method = 'GET',
  // eslint-disable-next-line no-undef
  body?: BodyInit | null,
) => {
  const fullPath = process.env.LOCAL_HOST + utils.getAPIPath(path, true)
  return processFetch(fullPath, method, body)
}

export default {
  fetchFromAPI: fetcher,
  fetch: serverFetchBFFApi,
  clientFetch: clientFetchBFFApi,
}
