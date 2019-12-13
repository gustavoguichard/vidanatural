import { Http2ServerResponse } from 'http2'
import fetch from 'isomorphic-unfetch'
import omitBy from 'lodash/omitBy'
import { parseCookies, encodeCookies } from 'utils/helpers'

function absoluteUrl(req: any, setLocalhost?: string) {
  var protocol = 'https:'
  var host = req
    ? req.headers['x-forwarded-host'] || req.headers['host']
    : window.location.host
  if (host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost
    protocol = 'http:'
  }

  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
  }
}

const omitCookies = (cookies = '', fn: (v: string, k: string) => boolean) => {
  const reqCookiesObj = parseCookies(cookies)
  const reqCookies = omitBy(reqCookiesObj, fn)
  return encodeCookies(reqCookies)
}

const keysWithLodash = (_: string, k: string) => k.startsWith('_')

export default async (req: any, res: Http2ServerResponse) => {
  const endpoint = req.url.replace('/api/proxy/', '').replace('::', '/')
  const { host } = absoluteUrl(req)

  try {
    if (endpoint) {
      const encodedCookies = omitCookies(req.headers.cookie, keysWithLodash)
      const url = `${process.env.API_IP}${endpoint}`
      const response = await fetch(url, {
        headers: {
          Accept: 'application/json',
          cookie: encodedCookies,
          Host: process.env.EXT_API_DOMAIN || host,
        },
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
