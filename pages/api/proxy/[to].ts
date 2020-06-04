import { NextApiRequest, NextApiResponse } from 'next'
import omitBy from 'lodash/omitBy'
import { parseCookies, encodeCookies } from 'lib/utils'

const omitCookies = (cookies = '', fn: (v: string, k: string) => boolean) => {
  const reqCookiesObj = parseCookies(cookies)
  const reqCookies = omitBy(reqCookiesObj, fn)
  return encodeCookies(reqCookies)
}

const keysWithLodash = (_: string, k: string) => k.startsWith('_')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.url) {
    res.status(404).json({ text: 'Not found' })
    return
  }

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
      res.setHeader('Biscuit', cookie)
      const isSuccess = response.status < 400
      if (isSuccess) {
        const json = await response.json()
        res.status(response.status).json(json)
        return
      }
    }
    res.status(500).json({ text: 'Could not process route' })
    return
  } catch (err) {
    console.log(err)
    res.status(500).json({ text: err })
    return
  }
}
