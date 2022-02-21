import InciLink from 'components/inci-link'
import { RichText } from 'prismic-reactjs'

const IngredientsDesktop = ({ data }) => (
  <table className="hidden my-6 text-sm border-b border-gray-200 divide-y divide-gray-200 rounded-lg shadow md:block">
    <thead>
      <tr className="bg-gray-50">
        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
          Nome
        </th>
        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
          INCI
        </th>
        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
          O que significa?
        </th>
      </tr>
    </thead>
    <tbody className="text-gray-700 bg-white divide-gray-200">
      {data.map((item, i) => (
        <tr key={`tr-item-${i}`} className="align-top bg-gray-50 odd:bg-white">
          {item.title && (
            <td className="px-6 py-4 lg:whitespace-nowrap">{item.title}</td>
          )}
          <td className="px-6 py-4" colSpan={item.title ? 1 : 2}>
            <InciLink {...item} />
          </td>
          <td className="px-6 py-4">
            {item.description ? <RichText render={item.description} /> : '--'}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default IngredientsDesktop
