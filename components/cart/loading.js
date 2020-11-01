import useGlobal from 'lib/use-global'

import Spinner from 'components/spinner'

const CartLoading = () => {
  const [{ updatingCart }] = useGlobal()
  return updatingCart ? (
    <div className="absolute flex justify-center items-center inset-0 bg-opacity-50 z-10 bg-gray-100">
      <Spinner color="text-teal-600" size={6} />
    </div>
  ) : null
}

export default CartLoading
