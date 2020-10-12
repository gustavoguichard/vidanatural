import isEmpty from 'lodash/isEmpty'

const InciLink = ({ link, inci_title }) =>
  isEmpty(link) ? (
    inci_title
  ) : (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 hover:underline"
      title="Obter mais informações"
    >
      {inci_title}
    </a>
  )

export default InciLink
