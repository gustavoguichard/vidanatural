import { memo } from 'react'
import { Typography } from '@material-ui/core'

import { calculatePostReadTime, getFromDate } from 'lib/domain'

import Link from 'components/link'

const DocumentDetails = ({
  prepend,
  disableLink,
  author,
  post,
  date,
  ...props
}) => {
  return (
    <Typography variant="caption" {...props}>
      {author && (
        <div>
          Escrito por{' '}
          <strong>
            {disableLink ? (
              author.data.name
            ) : (
              <Link {...author.permalink}>{author.data.name}</Link>
            )}
          </strong>
          <br />
        </div>
      )}
      <em>
        {prepend && `${prepend} `}
        {getFromDate(date)} · {calculatePostReadTime(post)} de leitura
      </em>
    </Typography>
  )
}

export default memo(DocumentDetails)
