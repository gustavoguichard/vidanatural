import get from 'lodash/get'
import map from 'lodash/map'
import shuffle from 'lodash/shuffle'
import isEmpty from 'lodash/isEmpty'
import { GetStaticProps } from 'next'

import api from 'lib/api'
import { getProductsByTag } from 'lib/domain'
import parseProduct from 'lib/parsers/product'
import parseProducts from 'lib/parsers/products'

import { VndaProduct } from 'types/vnda'

const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { slug } = params
  const response = await api.vnda.fetch(`products/${slug}`)
  const product = parseProduct(response)

  const products = await api.vnda.search()
  const categoryTags = get(product, 'category_tags')
  const tags = map(
    categoryTags.filter((c: any) => c.tag_type !== 'filter'),
    'name',
  )
  const allRelatedProducts = getProductsByTag(products, tags)
  const relatedProducts = parseProducts(
    allRelatedProducts.filter((p) => p.id !== product.id),
  ).filter((p) => p.inStock)

  const id = get(product, 'id')
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
    ? products.filter((p: VndaProduct) => includedIds.includes(String(p.id)))
    : null

  return {
    props: {
      product,
      slug,
      foundProduct: !isEmpty(product),
      tags,
      faqItems,
      testimonials,
      relatedProducts,
      includedProducts,
      cmsData: cmsProduct?.data ?? {},
    },
    revalidate: 15,
  }
}

export default getStaticProps
