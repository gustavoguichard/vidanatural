import { memo } from 'react'

import AuthorCard from 'components/author-card'
import Img from 'components/img'
import Link from 'components/link'

const PostPreview = ({
  author,
  date,
  data,
  excerpt,
  thumbUrl,
  imgAlt,
  permalink,
}) => (
  <div className="sm:flex mb-12 sm:space-x-6">
    {thumbUrl && (
      <div className="sm:w-1/4 mb-4">
        <Link title="Ir para o post" href={permalink}>
          <Img
            className="relative w-full h-64 sm:h-full"
            src={thumbUrl}
            alt={imgAlt || data.title}
          />
        </Link>
      </div>
    )}
    <div className="sm:w-3/4">
      <Link href={permalink}>
        <h3 className="text-3xl hover:underline font-bold tracking-tight leading-none">
          {data.title}
        </h3>
      </Link>
      <div className="mt-2 mb-4">
        <AuthorCard author={author} post={data.body} date={date} />
      </div>
      <div className="mb-2 text-lg">{excerpt}</div>
      <Link href={permalink} className="text-sm hover:underline">
        Ler mais
      </Link>
    </div>
  </div>
)

export default memo(PostPreview)
