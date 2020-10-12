import ProductContainer from 'components/products/container'
import Skeleton from './index'

const PostSkeleton = () => (
  <ProductContainer>
    <div className="md:w-1/2">
      <Skeleton height={400} />
    </div>
    <div className="md:w-1/2 py-4 px-10">
      <Skeleton className="mb-2 h-12" />
      <Skeleton className="w-1/4" />
      <Skeleton className="mt-6 mb-4 h-64" />
      <Skeleton className="h-12 w-1/2" />
    </div>
  </ProductContainer>
)

export default PostSkeleton
