import staticPaths from 'lib/static-paths/blog-page-uid'
import staticProps from 'lib/static-props/blog'

import EcommerceLayout from 'layouts/ecommerce'
import BlogPage from '../index'

const BlogPageNumber = BlogPage

BlogPageNumber.getLayout = EcommerceLayout
export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default BlogPageNumber
