import { useState, useRef } from 'react'
import get from 'lodash/get'

import api from 'lib/api'

import DiscountTag from 'components/products/discount-tag'
import Carousel from 'components/carousel'

const ImageGallery = ({ product }) => {
  const [index, setIndex] = useState(0)
  const imagesLenght = get(product, 'images.length', 2)

  const gallery = useRef()

  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className="relative flex items-start justify-center -mx-6 lg:mr-auto lg:ml-4"
        css={{ minHeight: 300 }}
      >
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
                src={api.vnda.getResizedImg(img.url, 600)}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <h2 className="lg:hidden text-center my-4 text-2xl font-bold leading-tight tracking-tight">
        {product.name}
      </h2>
      {imagesLenght > 1 ? (
        <div className="flex space-y-2 lg:space-x-0 space-x-2 flex-wrap justify-center lg:flex-col px-2 lg:px-0 lg:order-first">
          {product.images.map((img, i) => (
            <img
              key={i}
              onClick={() => gallery.current.goTo(i)}
              alt={product.name}
              className="w-24 lg:w-64 cursor-pointer transition-all duration-700"
              css={{
                boxShadow: i === index ? `0 0 0 2px black` : `0 0 0 0 black`,
              }}
              src={api.vnda.getResizedImg(img.url, 100)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default ImageGallery
