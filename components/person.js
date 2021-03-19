import { memo } from 'react'
import { FiEye } from 'react-icons/fi'

import Img from 'components/img'
import Link from 'components/link'

const Person = ({ data, uid }) => {
  const { is_long, picture, name } = data
  return (
    <Link href={`/eu-uso/${uid}`}>
      <figure
        className="cursor-pointer transition-all duration-300 m-0 mb-px w-full flex relative flex-col pr-px min-h-[250px]"
        css={{
          filter: 'saturate(0)',
          '&:hover, a:focus & ': { filter: 'saturate(1)' },
        }}
      >
        <Img
          className="w-full object-conver"
          src={picture[is_long ? 'long' : 'square'].url}
          alt={name}
        />
        <div className="text-white bg-black bg-opacity-50 absolute p-4 inset-x-0 bottom-0 flex">
          <h5 className="flex-grow">{name}</h5>
          <FiEye />
        </div>
      </figure>
    </Link>
  )
}

export default memo(Person)
