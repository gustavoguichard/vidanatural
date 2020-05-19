import { memo } from 'react'
import { Typography } from '@material-ui/core'

import { calculatePostReadTime, getFromDate } from 'lib/domain'

import Link from 'components/link'

const DocumentDetails = ({ author, post, date, ...props }) => {
  return (
    <Typography variant="caption" {...props}>
      {author && (
        <div>
          Escrito por{' '}
          <strong>
            <Link {...author.permalink}>{author.fullName}</Link>
          </strong>
          <br />
        </div>
      )}
      <em>
        {getFromDate(date)} · {calculatePostReadTime(post)} de leitura
      </em>
    </Typography>
  )
}

export default memo(DocumentDetails)
