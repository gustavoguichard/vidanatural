import InciLink from 'components/inci-link'
import RichText from 'components/rich-text'

const IngredientsDesktop = ({ data }) => (
  <table className="my-6 text-sm hidden md:block shadow border-b border-gray-200 rounded-lg divide-y divide-gray-200">
    <thead>
      <tr className="bg-gray-50">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Nome
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          INCI
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          O que significa?
        </th>
      </tr>
    </thead>
    <tbody className="bg-white text-gray-700 divide-gray-200">
      {data.map((item, i) => (
        <tr key={`tr-item-${i}`} className="align-top bg-gray-50 odd:bg-white">
          {item.title && (
            <td className="px-6 py-4 lg:whitespace-nowrap">{item.title}</td>
          )}
          <td className="px-6 py-4" colSpan={item.title ? 1 : 2}>
            <InciLink {...item} />
          </td>
          <td className="px-6 py-4">
            {item.description ? (
              <RichText className="no-margin">{item.description}</RichText>
            ) : (
              '--'
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default IngredientsDesktop
