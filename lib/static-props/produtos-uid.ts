import map from 'lodash/map'
import shuffle from 'lodash/shuffle'
import isEmpty from 'lodash/isEmpty'

import api from 'lib/api'
import { getProductsByTag } from 'lib/domain'
import parseProduct from 'lib/parsers/product'

import type { GetStaticProps } from 'next'
import type { ParsedProduct } from 'types/vnda'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { slug } = params
  const response = await api.vnda.fetch(`products/${slug}`)
  const product = parseProduct(response)
  const productsRes = await api.vnda.fetchFromAPI('products')
  const products: ParsedProduct[] = await Promise.all(
    productsRes.data.map(api.vnda.endpoints.populateProducts),
  )
  const categoryTags = product?.category_tags
  const tags = categoryTags
    ? map(
        categoryTags.filter((c: any) => c.tag_type !== 'filter'),
        'name',
      )
    : []
  const allRelatedProducts = getProductsByTag(products, tags)
  const relatedProducts = allRelatedProducts
    .filter((p) => p.id !== product.id)
    .filter((p) => p.inStock)

  const id = product?.id
  const testimonialsData = await api.cms.getByTypeAndTags(
    'testimonial',
    {
      fetch: [
        'testimonial.name',
        'testimonial.picture',
        'testimonial.content',
        'testimonial.short_content',
      ],
    },
    [...product.tag_names, 'institucional'],
  )
  const testimonials = shuffle(testimonialsData)

  const faqItems = await api.cms.getByTypeAndTags(
    'faq_item',
    {
      orderings: '[my.faq_item.title]',
      fetch: ['faq_item.title', 'faq_item.answer'],
    },
    product.tag_names,
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
