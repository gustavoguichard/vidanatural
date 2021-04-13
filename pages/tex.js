import { useState } from 'react'

import vnda from 'lib/api/vnda'

import Layout from 'components/layout'

const getTracking = ({ numero, url_rastreamento }) =>
  url_rastreamento ||
  `https://tracking.totalexpress.com.br/poupup_track.php?reid=14318&pedido=${numero}&nfiscal=${numero}`

const Page = ({ nfs }) => {
  const [list, setList] = useState(nfs)

  const handleClick = (nf) => async (ev) => {
    ev.preventDefault()
    setList(list.filter((item) => item.id !== nf.id))
    const response = await vnda.post('proxy/add-tracking', {
      url: getTracking(nf),
      order: nf.numero_ecommerce,
    })
    response && setList(list.filter((item) => item.id !== nf.id))
  }

  return (
    <Layout stickBar hideChat hideCertifications title="Códigos de rastreio">
      <div className="overflow-x-scroll max-w-screen-lg items-center mx-auto px-6 mt-24 my-8">
        <h1 className="text-center text-3xl">Tabela de rastreamento:</h1>
        {list.length > 0 ? (
          <table className="my-6 text-sm shadow border-b border-gray-200 rounded-lg divide-y divide-gray-200 max-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NF
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rastreamento
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700 divide-gray-200">
              {list.map((nf, i) => {
                const tracking = getTracking(nf)
                return (
                  <tr key={`tr-item-${i}`} className="bg-gray-50 odd:bg-white">
                    <td className="px-6 py-4">{nf.data_emissao}</td>
                    <td className="px-6 py-4">{nf.cliente.nome}</td>
                    <td className="px-6 py-4">{nf.numero}</td>
                    <td
                      onClick={handleClick(nf)}
                      className="cursor-pointer px-6 py-4 text-blue-600 underline hover:bg-gray-100"
                    >
                      {tracking}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col mx-auto items-center p-8 text-green-900 border-2 border-green-400 max-w-full text-lg font-semibold text-center w-72 mt-8 rounded bg-green-200">
            <p>
              Feito <span className="text-xl">😉</span>
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const response = await vnda.fetch(`proxy/last-confirmed-orders`)
  const ordersWithoutTracking = response
    .filter((order) => order.tracking_code_list.length === 0)
    .map(({ code }) => code)

  const res = await vnda.fetch('proxy/tex')
  const parsed = res
    .map(({ nota_fiscal }) => nota_fiscal)
    .filter((nf) => ordersWithoutTracking.includes(nf.numero_ecommerce))

  return { props: { nfs: parsed.reverse() } }
}

export default Page
