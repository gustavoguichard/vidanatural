import { Avatar } from '@material-ui/core'

import { isEmptyBody } from 'lib/domain'
import { classes } from 'lib/utils'

import Img from 'components/img'
import Link from 'components/link'
import RichText from 'components/rich-text'

const ShortTestimonial = ({ data, uid, className }) => {
  const { name, picture, short_content, content } = data
  const cx = classes(
    'py-8 px-12 max-w-md sm:text-center w-full sm:w-1/2 lg:w-1/3',
    className,
  )
  return (
    <div className={cx}>
      <Link
        href="/eu-uso/[name]"
        as={`/eu-uso/${uid}`}
        title="Ver depoimento completo"
      >
        <Img
          Component={Avatar}
          circle
          height={130}
          width={130}
          className="h-24 w-24 m-auto mb-4"
          alt={name}
          src={picture.url}
        />
      </Link>
      <h4 className="tracking-tight font-semibold text-lg">
        {name.split(' ')[0]}
      </h4>
      <div className="tracking-wide text-gray-700 leading-relaxed mt-2">
        <RichText>
          {isEmptyBody(short_content) ? content : short_content}
        </RichText>
      </div>
    </div>
  )
}

export default ShortTestimonial
