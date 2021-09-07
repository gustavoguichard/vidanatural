/* eslint-disable @next/next/no-img-element */
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
            <div className="relative flex justify-center" key={`img-${i}`}>
              <DiscountTag product={product} />
              <img
                className="relative z-10 object-contain max-w-full"
                alt={product.name}
                src={api.vnda.utils.getResizedImg(img.url, 600)}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {imagesLenght > 1 ? (
        <div className="flex flex-wrap items-center justify-center px-2 mt-2 lg:flex-col lg:px-0 lg:order-first lg:mt-0">
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
