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
      code: nf.numero,
      url: getTracking(nf),
      order: nf.numero_ecommerce,
    })
    response && setList(list.filter((item) => item.id !== nf.id))
  }

  return (
    <Layout stickBar hideChat hideCertifications title="Códigos de rastreio">
      <div className="flex flex-col max-w-screen-lg items-center mx-auto px-6 mt-24 my-8">
        <h1 className="text-center text-3xl">Tabela de rastreamento:</h1>
        <table className="my-6 text-sm shadow border-b border-gray-200 rounded-lg divide-y divide-gray-200">
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
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  // const response = await vnda.fetch(`proxy/orders?status=confirmed`)
  // const ordersWithoutTracking = response
  //   .filter((order) => order.tracking_code_list.length === 0)
  //   .map(({ code }) => code)

  const res = await vnda.fetch('proxy/tex')
  const parsed = res
    .map(({ nota_fiscal }) => nota_fiscal)
    // .filter((nf) => ordersWithoutTracking.includes(nf.numero_ecommerce))
    .filter((nf) => nf.numero_ecommerce)

  return { props: { nfs: parsed.reverse() } }
}

export default Page
