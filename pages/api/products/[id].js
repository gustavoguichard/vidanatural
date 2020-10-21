import api from 'lib/api'

export default async (req, res) => {
  const { query } = req
  const { fetcher } = await api.vndaV2.setup(req, res)
  const response = await fetcher(`products/${query.id}`)
  const images = await fetcher(`products/${query.id}/images`)
  if (response.data) {
    res.send({ ...response.data, images: images.data })
  } else {
    res.send({})
  }
}
