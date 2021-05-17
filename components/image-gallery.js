import { useState, useRef } from 'react'
import get from 'lodash/get'

import api from 'lib/api'

import Carousel from 'components/carousel'
import DiscountTag from 'components/products/discount-tag'
import ProductTitle from 'components/products/title'

const ImageGallery = ({ product }) => {
  const [index, setIndex] = useState(0)
  const imagesLenght = get(product, 'images.length', 2)

  const gallery = useRef()

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:hidden">
        <ProductTitle product={product} />
      </div>
      <div className="relative flex items-start justify-center -mx-6 lg:mr-auto lg:ml-4 min-h-[300px]">
        <Carousel
          ref={gallery}
          NextButton={false}
          PrevButton={false}
          onChange={({ current }) => setIndex(current - 1)}
        >
          {product.images.map((img, i) => (
            <div className="flex justify-center relative" key={`img-${i}`}>
              <DiscountTag product={product} />
              <img
                className="max-w-full object-contain relative z-10"
                alt={product.name}
                src={api.vnda.utils.getResizedImg(img.url, 600)}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {imagesLenght > 1 ? (
        <div className="flex flex-wrap justify-center items-center lg:flex-col px-2 lg:px-0 lg:order-first mt-2 lg:mt-0">
          {product.images.map((img, i) => (
            <img
              key={i}
              onClick={() => gallery.current.goTo(i)}
              alt={product.name}
              className={`w-24 h-24 m-1 lg:w-80 lg:h-auto object-contain cursor-pointer transition-all duration-700 ${
                i === index && 'ring-2 ring-gray-900'
              }`}
              src={api.vnda.utils.getResizedImg(img.url, 250)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default ImageGallery
