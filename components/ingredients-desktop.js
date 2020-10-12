import InciLink from 'components/inci-link'
import RichText from 'components/rich-text'

const IngredientsDesktop = ({ data }) => {
  return (
    <table className="mt-10 mb-6 divide-y text-sm hidden md:block">
      <thead className="text-left font-semibold">
        <tr>
          <td className="px-4 pb-4">Nome</td>
          <td className="px-4 pb-4">INCI</td>
          <td className="px-4 pb-4">O que significa?</td>
        </tr>
      </thead>
      <tbody className="divide-y">
        {data.map((item, i) => (
          <tr key={`tr-item-${i}`}>
            {item.title && <td className="p-4">{item.title}</td>}
            <td className="p-4" colSpan={item.title ? 1 : 2}>
              <InciLink {...item} />
            </td>
            <td className="p-4">
              {item.description ? (
                <RichText>{item.description}</RichText>
              ) : (
                '--'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default IngredientsDesktop
