import { Http2ServerResponse } from 'http2'
import omitBy from 'lodash/omitBy'
import { parseCookies, encodeCookies } from 'utils/helpers'

const omitCookies = (cookies = '', fn: (v: string, k: string) => boolean) => {
  const reqCookiesObj = parseCookies(cookies)
  const reqCookies = omitBy(reqCookiesObj, fn)
  return encodeCookies(reqCookies)
}

const keysWithLodash = (_: string, k: string) => k.startsWith('_')

export default async (req: any, res: Http2ServerResponse) => {
  const endpoint = req.url.replace('/api/proxy/', '').replace('::', '/')

  try {
    if (endpoint) {
      const encodedCookies = omitCookies(req.headers.cookie, keysWithLodash)
      const url = `${process.env.API_IP}${endpoint}`
      const headersBase = {
        Accept: 'application/json',
        cookie: encodedCookies,
      }
      const headers = process.env.EXT_API_DOMAIN
        ? {
            ...headersBase,
            Host: process.env.EXT_API_DOMAIN,
          }
        : headersBase
      const response = await fetch(url, {
        headers,
        method: req.method,
        credentials: 'include',
      })
      const cookie = response.headers.get('Set-Cookie') || ''
      res.writeHead(response.status, { Biscuit: cookie })
      const isSuccess = response.status < 400
      if (isSuccess) {
        const json = await response.json()
        res.end(JSON.stringify(json))
      }
    }
    res.end(`[]`)
  } catch (err) {
    console.log(err)
    res.end(`[]`)
  }
}
