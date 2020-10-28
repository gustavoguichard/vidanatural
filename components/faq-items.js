import { memo } from 'react'

import { getExcerpt } from 'lib/domain'

import DocumentDetails from 'components/document-details'
import Link from 'components/link'

const FaqItem = ({ last_publication_date, uid, data }) => {
  return (
    <Link
      className="flex flex-col py-6 px-4 transition duration-500 hover:bg-gray-100"
      href={`/faq/${uid}`}
    >
      <h4 className="text-lg leading-tight">{data.title}</h4>
      <DocumentDetails
        className="text-gray-600"
        prepend="Atualizado"
        date={last_publication_date}
        post={data.answer}
      />
      <div className="mt-2 text-gray-700 text-sm">
        {getExcerpt(data.answer, 100)}
      </div>
    </Link>
  )
}

const FaqItems = ({ items }) => (
  <div className="bg-white -mx-4 sm:mx-0 divide-y divide-gray-200 shadow rounded-lg border border-gray-100">
    {items.map((item) => (
      <FaqItem key={`item-${item.id}`} {...item} />
    ))}
  </div>
)

export default memo(FaqItems)
