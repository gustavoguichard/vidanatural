import { memo } from 'react'

import { calculatePostReadTime, timeSince } from 'lib/domain'

const DocumentDetails = ({ prepend, author, post, date, ...props }) => (
  <div className="text-sm" {...props}>
    <em className="text-xs">
      {prepend && `${prepend} `}
      há {timeSince(date)} · {calculatePostReadTime(post)} de leitura
    </em>
  </div>
)

export default memo(DocumentDetails)
