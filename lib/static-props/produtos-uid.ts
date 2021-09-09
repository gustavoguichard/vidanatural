import map from 'lodash/map'
import shuffle from 'lodash/shuffle'
import isEmpty from 'lodash/isEmpty'
import last from 'lodash/last'

import api from 'lib/api'
import { getProductsByTag } from 'lib/domain'

import type { GetStaticProps } from 'next'
import type { ParsedProduct, ProductTag } from 'types/vnda'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { slug } = params
  const id = last((slug as string).split('-'))
  const productsRes = await api.vnda.fetchFromAPI('products')
  const products: ParsedProduct[] = await Promise.all(
    productsRes.data.map(api.vnda.endpoints.populateProducts),
  )
  const product = products.find((p) => String(p.id) === id)
  const categoryTags = product?.category_tags || []
  const tags = map(
    categoryTags.filter((c: ProductTag) => c.tag_type !== 'filter'),
    'name',
  )
  const allRelatedProducts = getProductsByTag(products, tags)
  const relatedProducts = allRelatedProducts
    .filter((p) => String(p.id) !== id)
    .filter((p) => p.inStock)

  const testimonialsData = await api.cms.getByTypeAndTags(
    'testimonial',
    {
      fetch: [
        'testimonial.name',
        'testimonial.picture',
        'testimonial.content',
        'testimonial.short_content',
        'testimonial.role',
        'testimonial.location',
      ],
    },
    [...(product?.tag_names || []), 'institucional'],
  )
  const testimonials = shuffle(testimonialsData)

  const faqItems = await api.cms.getByTypeAndTags(
    'faq_item',
    {
      orderings: '[my.faq_item.title]',
      fetch: ['faq_item.title', 'faq_item.answer'],
    },
    product?.tag_names,
  )

  const cmsProduct = await api.cms.getExact('product', 'vnda_id', String(id), {
    fetchLinks: ['product.vnda_id'],
  })

  const includedIds = map(
    cmsProduct?.data?.related_products,
    'related_product.data.vnda_id',
  )

  const includedProducts = cmsProduct?.data?.related_products
    ? products.filter((p: ParsedProduct) => includedIds.includes(String(p.id)))
    : null

  return {
    props: {
      cmsData: cmsProduct?.data ?? {},
      faqItems,
      foundProduct: !isEmpty(product),
      includedProducts,
      product,
      relatedProducts,
      slug,
      testimonials,
    },
    revalidate: 15,
  }
}

export default getStaticProps
