import { useState } from 'react'

import api from 'lib/api'
import { useInterval } from 'lib/hooks'
import { cx } from 'lib/utils'

import Img from 'components/img'

const CardImage = ({ product }) => {
  const [image] = product.images
  const [hovering, setHovering] = useState(false)
  const [index, setIndex] = useState(0)
  const nextImage = () => setIndex((index + 1) % product.images.length)
  useInterval(nextImage, hovering ? 900 : null)

  const thumbnail = product.images[index].url || image.url

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative"
    >
      <div
        className={cx(
          'absolute transition-all bg-white inset-0 duration-300 z-10',
          hovering ? 'opacity-20' : 'opacity-0'
        )}
        style={{
          clipPath: hovering
            ? 'polygon(0% 0%, 0% 100%, 50% 100%, 50% 98%, 2% 2%, 98% 2%, 50% 98%, 50% 100%, 100% 100%, 100% 0%)'
            : 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%, 100% 0%)',
        }}
      />
      <Img
        className="w-full h-64"
        alt={product.name}
        src={api.vnda.utils.getResizedImg(thumbnail, 300)}
        title={product.name}
      />
    </div>
  )
}

export default CardImage
