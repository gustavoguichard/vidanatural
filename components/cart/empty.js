import Logo from 'components/svg/logo'

const CartEmpty = () => (
  <div className="flex flex-col flex-grow self-stretch items-center justify-center">
    <Logo className="w-16 mb-2" />
    <p className="text-xs">Seu carrinho está vazio</p>
  </div>
)

export default CartEmpty
