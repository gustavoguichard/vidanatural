import React from 'react'
import { useInView } from 'react-intersection-observer'
import isEmpty from 'lodash/isEmpty'

import { getDiscount } from 'lib/domain'

import Markdown from 'components/markdown'
import ImageGallery from 'components/image-gallery'
import BCrumbs from 'components/breadcrumbs'
import Breadcrumbs from './breadcrumbs'
import Description from './description'
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
      <div className="max-w-screen-xl m-auto px-10 pt-16 lg:pt-12 pb-12">
        <Breadcrumbs className="hidden lg:flex" product={product} />
        <div className="lg:space-x-8 lg:flex justify-center">
          <div className="lg:w-1/2">
            <ImageGallery product={product} />
          </div>
          <div className="lg:w-1/2 py-4">
            <div className="hidden lg:block">
              <ProductTitle product={product} />
            </div>
            <Breadcrumbs className="lg:hidden" product={product} />
            {product.description.featured && (
              <Markdown>{product.description.featured}</Markdown>
            )}
            <BCrumbs
              separator={<span className="text-gray-400"> - </span>}
              size="xs"
              className="text-teal-600"
              hideHome
              links={[
                hasInformation && {
                  title: 'Mais detalhes',
                  href: '#descricao',
                  raw: true,
                },
                hasIngredinets && {
                  title: 'Ver ingredientes',
                  href: '#ingredientes',
                  raw: true,
                },
                hasFaqItems && {
                  title: 'Dúvidas',
                  href: '#faq',
                  raw: true,
                },
                hasTestimonials && {
                  title: 'Depoimentos',
                  href: '#depoimentos',
                  raw: true,
                },
              ].filter((a) => !!a)}
            />
            <Markdown className="text-gray-600 my-4">
              {product.description.presentation}
            </Markdown>
            <PriceTag big item={variant} />
            {product.isKit && product.discount_rule && (
              <p className="text-xs mb-1">
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
      {hasInformation && <Description product={product} />}
    </>
  )
}

export default ProductSale
