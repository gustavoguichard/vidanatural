import { forwardRef } from 'react'
import { Skeleton } from '@material-ui/lab'

const CustomSkeleton = ({ variant = 'rect', ...props }, ref) => (
  <Skeleton ref={ref} variant={variant} animation="wave" {...props} />
)

export default forwardRef(CustomSkeleton)
