import { memo } from 'react'

import { getExcerpt } from 'lib/domain'

import DocumentDetails from 'components/document-details'
import Link from 'components/link'

const FaqItem = ({ last_publication_date, uid, data }) => (
  <Link
    className="flex flex-col px-4 py-6 transition duration-500 hover:bg-gray-100"
    href={`/faq/${uid}`}
  >
    <h4 className="text-lg leading-tight">{data.title}</h4>
    <DocumentDetails
      className="text-gray-600"
      prepend="Atualizado"
      date={last_publication_date}
      post={data.answer}
    />
    <div className="mt-2 text-sm text-gray-700 line-clamp-3">
      {getExcerpt(data.answer)}
    </div>
  </Link>
)

const FaqItems = ({ items }) => (
  <div className="-mx-4 bg-white border border-gray-100 divide-y divide-gray-200 rounded-lg shadow sm:mx-0">
    {items.map((item) => (
      <FaqItem key={`item-${item.id}`} {...item} />
    ))}
  </div>
)

export default memo(FaqItems)
