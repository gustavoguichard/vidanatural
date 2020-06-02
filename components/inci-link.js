import isEmpty from 'lodash/isEmpty'
import { Link } from '@material-ui/core'

const InciLink = ({ link, inci_title }) =>
  isEmpty(link) ? (
    inci_title
  ) : (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener"
      color="secondary"
      title="Obter mais informações"
    >
      {inci_title}
    </Link>
  )

export default InciLink
