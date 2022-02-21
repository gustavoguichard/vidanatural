import React from 'react'
import { useRouter } from 'next/router'
import isEmpty from 'lodash/isEmpty'
import startCase from 'lodash/startCase'

import staticProps from 'lib/static-props/tag-uid'
import staticPaths from 'lib/static-paths/tag-uid'

import EcommerceLayout from 'layouts/ecommerce'
import HomeFeed from 'components/home/feed'
import MoreProducts from 'components/more-products'
import SEO from 'components/seo'
import ProductFaq from 'components/products/faq'

const TagPage = ({ banner, products, posts, faqItems }) => {
  const router = useRouter()
  const title = `Tag: ${startCase(router.query.uid)}`
  const emptyPage =
    [banner, products, posts, faqItems].every(isEmpty) || router.isFallback
  return (
    <>
      <SEO title={title} />
      {posts?.length && <HomeFeed posts={posts} />}
      {products?.length && (
        <MoreProducts title="Produtos relacionados" products={products} />
      )}
      {emptyPage && (
        <div className="flex flex-col items-stretch w-full px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-center min-h-[70vh] p-12 text-center border-2 border-gray-300 border-dashed rounded-lg">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {router.isFallback
                ? 'Carregando...'
                : `Nenhum conteúdo para a ${title}`}
            </h2>
          </div>
        </div>
      )}
      <ProductFaq items={faqItems} />
    </>
  )
}

TagPage.getLayout = EcommerceLayout
export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default TagPage
