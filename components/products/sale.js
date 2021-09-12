import React from 'react'
import { useInView } from 'react-intersection-observer'
import isEmpty from 'lodash/isEmpty'

import { getDiscount } from 'lib/domain'

import ImageGallery from 'components/image-gallery'
import Description from './description'
import HighlightedTestimonial from './highlighted-testimonial'
import ProductTitle from './title'
import PriceTag from './price-tag'
import ProductCTA from './cta'
import MobileCTA from './mobile-cta'

const ProductSale = ({ product, hasTestimonials, hasFaqItems, cmsData }) => {
  const [ref, visible] = useInView({ threshold: 0, triggerOnce: false })
  const [variant] = product.variants || [{}]
  const hasInformation = !!product.description.information
  const hasIngredinets = !(
    isEmpty(cmsData.ingredients) && isEmpty(cmsData.ingredients_table)
  )

  return (
    <>
      {product.inStock && <MobileCTA visible={visible} product={product} />}
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
                className="rich-text"
                dangerouslySetInnerHTML={{
                  __html: product.description.featured,
                }}
              />
            )}
            <div
              className="my-4 text-gray-600 rich-text"
              dangerouslySetInnerHTML={{
                __html: product.description.presentation,
              }}
            />
            <PriceTag big item={variant} />
            {product.isKit && product.discount_rule && (
              <p className="mb-1 text-xs">
                Você economiza{' '}
                <span className="text-sm font-semibold">
                  {getDiscount(product)}
                </span>{' '}
                ao comprar estes produtos juntos.
              </p>
            )}
            <ProductCTA ref={ref} product={product} />
          </div>
        </div>
      </div>
      <HighlightedTestimonial product={product} />
      {hasInformation && <Description product={product} />}
    </>
  )
}

export default ProductSale
