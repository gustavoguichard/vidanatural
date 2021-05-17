import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.url) {
    res.status(404).json({ text: 'Not found' })
    return
  }

  const endpoint = req.url.replace('/api/proxy/', '').replace('::', '/')

  try {
    if (endpoint) {
      const url = `${process.env.API_IP}${endpoint}`
      const response = await fetch(url, {
        headers: { Accept: 'application/json' },
        method: req.method,
        credentials: 'include',
      })
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
