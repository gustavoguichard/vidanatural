import { memo } from 'react'

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
    <div className="text-sm" {...props}>
      {author && (
        <div>
          Escrito por{' '}
          <strong>
            {disableLink ? (
              author.data.name
            ) : (
              <Link {...author.permalink} className="hover:underline">
                {author.data.name}
              </Link>
            )}
          </strong>
          <br />
        </div>
      )}
      <em className="text-xs">
        {prepend && `${prepend} `}
        {getFromDate(date)} · {calculatePostReadTime(post)} de leitura
      </em>
    </div>
  )
}

export default memo(DocumentDetails)
