import { useState } from 'react'

import vnda from 'lib/api/vnda'

import EcommerceLayout from 'layouts/ecommerce'

const getTracking = ({ numero, url_rastreamento }) =>
  url_rastreamento ||
  `https://tracking.totalexpress.com.br/poupup_track.php?reid=14318&pedido=${numero}&nfiscal=${numero}`

const Page = ({ nfs }) => {
  const [list, setList] = useState(nfs)

  const handleClick = (nf) => async (ev) => {
    ev.preventDefault()
    setList(list.filter((item) => item.id !== nf.id))
    const response = await vnda.post('products/add-tracking', {
      url: getTracking(nf),
      order: nf.numero_ecommerce,
    })
    response && setList(list.filter((item) => item.id !== nf.id))
  }

  return (
    <div className="items-center max-w-screen-lg px-6 mx-auto my-8 mt-24 overflow-x-scroll">
      <h1 className="text-3xl text-center">Tabela de rastreamento:</h1>
      {list.length > 0 ? (
        <table className="max-w-full my-6 text-sm border-b border-gray-200 divide-y divide-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Data
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Nome
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                NF
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Rastreamento
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 bg-white divide-gray-200">
            {list.map((nf, i) => {
              const tracking = getTracking(nf)
              return (
                <tr key={`tr-item-${i}`} className="bg-gray-50 odd:bg-white">
                  <td className="px-6 py-4">{nf.data_emissao}</td>
                  <td className="px-6 py-4">{nf.cliente.nome}</td>
                  <td className="px-6 py-4">{nf.numero}</td>
                  <td
                    onClick={handleClick(nf)}
                    className="px-6 py-4 text-blue-600 underline cursor-pointer hover:bg-gray-100"
                  >
                    {tracking}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col items-center max-w-full p-8 mx-auto mt-8 text-lg font-semibold text-center text-green-900 bg-green-200 border-2 border-green-400 rounded w-72">
          <p>
            Feito <span className="text-xl">😉</span>
          </p>
        </div>
      )}
    </div>
  )
}

Page.getLayout = EcommerceLayout

export const getServerSideProps = async () => {
  const response = await vnda.fetch(`products/last-confirmed-orders`)
  const ordersWithoutTracking = response
    .filter((order) => order.tracking_code_list.length === 0)
    .map(({ code }) => code)

  const res = await vnda.fetch('products/tex')
  const parsed = res
    .map(({ nota_fiscal }) => nota_fiscal)
    .filter((nf) => ordersWithoutTracking.includes(nf.numero_ecommerce))

  return { props: { nfs: parsed.reverse() } }
}

export default Page
