import useGlobal from 'lib/use-global'

import Spinner from 'components/spinner'

const CartLoading = () => {
  const [{ updatingCart }] = useGlobal()
  return updatingCart ? (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100/50">
      <Spinner color="text-teal-600" size={6} />
    </div>
  ) : null
}

export default CartLoading
