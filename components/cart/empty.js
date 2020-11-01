import logoImg from 'public/static/svgs/logo.svg'

const CartEmpty = () => (
  <div className="flex flex-col flex-grow self-stretch items-center justify-center">
    <img className="w-16 mb-2" src={logoImg} alt="Vida Natural" />
    <p className="text-xs">Seu carrinho está vazio</p>
  </div>
)

export default CartEmpty
