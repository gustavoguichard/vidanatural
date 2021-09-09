import { memo } from 'react'
import { FiEye } from 'react-icons/fi'

import Img from 'components/img'
import Link from 'components/link'

const Person = ({ data, uid }) => {
  const { is_long, picture, name } = data
  return (
    <Link className={is_long ? 'tall' : 'short'} href={`/eu-uso/${uid}`}>
      <figure className="relative w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:filter-none">
        <Img
          className="w-full h-full"
          src={picture[is_long ? 'long' : 'square'].url}
          alt={name}
        />
        <div className="absolute inset-x-0 bottom-0 flex p-4 text-white bg-black/50">
          <h5 className="flex-grow">{name}</h5>
          <FiEye />
        </div>
      </figure>
    </Link>
  )
}

export default memo(Person)
