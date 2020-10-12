import { memo } from 'react'
import { BsEyeFill } from 'react-icons/bs'

import Img from 'components/img'
import Link from 'components/link'

const Person = ({ data, uid }) => {
  const { is_long, picture, name } = data
  return (
    <Link href="/eu-uso/[name]" as={`/eu-uso/${uid}`}>
      <figure
        className="cursor-pointer transition-all duration-300 m-0 mb-px w-full flex relative flex-col pr-px"
        css={{
          filter: 'saturate(0)',
          '&:hover, a:focus & ': { filter: 'saturate(1)' },
          minHeight: 250,
        }}
      >
        <Img
          className="w-full object-conver"
          src={picture[is_long ? 'long' : 'square'].url}
          alt={name}
        />
        <div className="text-white bg-black bg-opacity-50 absolute p-4 inset-x-0 bottom-0 flex">
          <h5 className="flex-grow">{name}</h5>
          <BsEyeFill />
        </div>
      </figure>
    </Link>
  )
}

export default memo(Person)
