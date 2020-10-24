const InciLink = ({ link, inci_title }) =>
  link.url ? (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-600 hover:underline"
      title="Obter mais informações"
    >
      {inci_title}
    </a>
  ) : (
    inci_title
  )

export default InciLink
