import isObject from 'lodash/isObject'
import getConfig from 'next/config'
import { NextApiRequest, NextApiResponse } from 'next'

const notAllowed = (res: NextApiResponse) => () => {
  res.status(400).end()
  return false
}

const normalizeBody = (body: undefined | string | object, method: string) => {
  if (['HEAD', 'GET', 'DELETE'].includes(method)) return undefined

  return isObject(body) ? JSON.stringify(body) : body
}

const setup = async (
  req: NextApiRequest,
  res: NextApiResponse,
  allowedMethod = 'GET',
) => {
  if (req.method !== allowedMethod) {
    return { fetcher: notAllowed(res) }
  }

  const {
    serverRuntimeConfig: {
      api: { host, token },
    },
  } = getConfig()

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Host: process.env.API_HOST,
    Authorization: `Token token="${token}"`,
  }

  const fetcher = async (
    path: string,
    method = 'GET',
    body?: string | object,
  ) => {
    const url = `https://${host}/api/v2/${path}`
    const options = { headers, method, body: normalizeBody(body, method) }
    console.log(url, options)
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
  return { fetcher }
}

const fetchBFFApi = async (
  path: string,
  method = 'GET',
  rawBody?: string | object,
) => {
  try {
    const fullPath =
      (typeof window !== 'undefined'
        ? window.location.origin
        : process.env.LOCAL_HOST) + `api${path}`.replace('//', '/')

    const body = rawBody ? JSON.stringify(rawBody) : undefined
    const response = await fetch(fullPath, { method, body })
    return response.json()
  } catch (error) {
    return { error, status: 500 }
  }
}

export default { fetch: fetchBFFApi, setup }
