import React from 'react'

import ImageGallery from 'components/image-gallery'
import Description from './description'
import HighlightedTestimonial from './highlighted-testimonial'
import ProductTitle from './title'

const ProductSale = ({ product }) => {
  const hasInformation = Boolean(product.description.information)

  return (
    <>
      <div className="max-w-screen-xl px-10 pt-16 pb-12 m-auto lg:pt-12">
        <div className="justify-center lg:space-x-8 lg:flex">
          <div className="lg:w-1/2">
            <ImageGallery product={product} />
          </div>
          <div className="py-4 lg:w-1/2">
            <div className="hidden lg:block">
              <ProductTitle product={product} />
            </div>
            {product.description.featured && (
              <div
                className="prose prose-secondary"
                dangerouslySetInnerHTML={{
                  __html: product.description.featured,
                }}
              />
            )}
            <div
              className="my-4 prose text-gray-600 prose-secondary"
              dangerouslySetInnerHTML={{
                __html: product.description.presentation,
              }}
            />
          </div>
        </div>
      </div>
      <HighlightedTestimonial product={product} />
      {hasInformation && <Description product={product} />}
    </>
  )
}

export default ProductSale
