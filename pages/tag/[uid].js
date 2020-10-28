import React from 'react'
import { useRouter } from 'next/router'
import isEmpty from 'lodash/isEmpty'
import startCase from 'lodash/startCase'

import staticProps from 'lib/static-props/tag-uid'
import staticPaths from 'lib/static-paths/tag-uid'

import Banners from 'components/banners'
import Breadcrumbs from 'components/breadcrumbs'
import FeedSlider from 'components/feed-slider'
import Layout from 'components/layout'
import ProductGrid from 'components/product-grid'
import ProductFaq from 'components/products/faq'
import Testimonials from 'components/testimonials'

const TagPage = ({ banners, products, posts, testimonials, faqItems }) => {
  const router = useRouter()
  const title = `Tag: ${startCase(router.query.uid)}`
  const hero = isEmpty(banners) ? null : (
    <Banners banners={banners} setVariant={() => {}} />
  )
  const emptyPage =
    [banners, products, posts, testimonials, faqItems].every(isEmpty) &&
    !router.isFallback
  return (
    <Layout title={title} variant="secondary" stickBar={!hero}>
      {hero}
      <div className="max-w-screen-xl m-auto p-10">
        <div className="max-w-screen-lg m-auto text-center">
          <Breadcrumbs>{title}</Breadcrumbs>
        </div>
        {(router.isFallback || !isEmpty(posts)) && (
          <>
            <h3 className="text-3xl font-semibold tracking-tight m-8 text-center">
              Posts no blog
            </h3>
            <FeedSlider posts={posts} />
          </>
        )}
      </div>
      <div className="max-w-screen-xl m-auto py-10 px-6 border-t-8 border-white">
        {isEmpty(products) || (
          <>
            <h3 className="text-3xl font-semibold tracking-tight m-8 text-center">
              Produtos relacionados
            </h3>
            <ProductGrid products={products} />
          </>
        )}
        {emptyPage && (
          <h2 className="text-4xl text-center font-bold leading-none tracking-tight mx-4 mb-4">
            Nenhum conteúdo para a {title}
          </h2>
        )}
      </div>
      <ProductFaq items={faqItems} />
      <Testimonials testimonials={testimonials} />
    </Layout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default TagPage
