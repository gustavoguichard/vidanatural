import { memo } from 'react'
import Img from 'next/image'
import { FiEye } from 'react-icons/fi'

import Link from 'components/link'

const Person = ({ data, uid }) => {
  const { is_long, picture, name } = data
  return (
    <Link className={is_long ? 'tall' : 'short'} href={`/eu-uso/${uid}`}>
      <figure className="cursor-pointer transition-all duration-300 w-full h-full relative filter grayscale hover:filter-none">
        <Img
          layout="fill"
          objectFit="cover"
          unoptimized
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
