import { Http2ServerResponse } from 'http2'
import fetch from 'isomorphic-unfetch'
import { getUrl } from 'utils/api'

export default async (req: any, res: Http2ServerResponse) => {
  try {
    const url = getUrl('webform')
    console.log(url)
    await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(req.body),
    })
    res.end('success')
  } catch (err) {
    res.end(`[]`)
  }
}
