import api from 'lib/api'

export default async (req, res) => {
  const { fetcher } = await api.vndaV2.setup(req, res)
  const response = await fetcher('products')
  if (response.data) {
    const data = await Promise.all(
      response.data.map((product) => {
        return api.vndaV2.fetch(`/products/${product.id}`)
      }),
    )
    res.send(data)
  } else {
    res.send([])
  }
}
