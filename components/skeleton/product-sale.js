import Breadcrumbs from 'components/products/breadcrumbs'
import Skeleton from './index'

const ProductSkeleton = () => (
  <div className="max-w-screen-xl m-auto px-10 pt-16 md:pt-12 pb-12">
    <Breadcrumbs className="hidden md:flex" />
    <div className="md:space-x-8 md:flex justify-center">
      <div className="md:w-1/2">
        <Skeleton height={400} />
      </div>
      <div className="md:w-1/2 py-4">
        <Skeleton className="mb-2 h-12" />
        <Skeleton className="w-1/4" />
        <Skeleton className="mt-6 mb-4 h-64" />
        <Skeleton className="h-12 w-1/2" />
      </div>
    </div>
  </div>
)

export default ProductSkeleton
