import Skeleton from './index'

const PostSkeleton = () => (
  <div className="flex mb-12 space-x-8">
    <div className="sm:w-3/12">
      <Skeleton className="h-48" />
    </div>
    <div className="sm:w-9/12">
      <Skeleton className="h-12 mb-2" />
      <Skeleton className="mb-4 h-10 w-48" />
      <Skeleton className="h-20" />
    </div>
  </div>
)

export default PostSkeleton
