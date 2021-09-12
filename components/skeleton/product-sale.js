import Skeleton from './index'

const ProductSkeleton = () => (
  <div className="max-w-screen-xl px-10 pt-16 pb-12 m-auto md:pt-12">
    <div className="justify-center md:space-x-8 md:flex">
      <div className="md:w-1/2">
        <Skeleton height={400} />
      </div>
      <div className="py-4 md:w-1/2">
        <Skeleton className="h-12 mb-2" />
        <Skeleton className="w-1/4" />
        <Skeleton className="h-64 mt-6 mb-4" />
        <Skeleton className="w-1/2 h-12" />
      </div>
    </div>
  </div>
)

export default ProductSkeleton
