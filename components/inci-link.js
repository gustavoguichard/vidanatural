import { Link } from '@material-ui/core'

import { EWG_URL } from 'data/ingredients'

const InciLink = ({ url, inci }) =>
  url ? (
    <Link
      href={EWG_URL + url}
      target="_blank"
      rel="noopener"
      color="secondary"
      title="Obter mais informações"
    >
      {inci}
    </Link>
  ) : (
    inci
  )

export default InciLink
