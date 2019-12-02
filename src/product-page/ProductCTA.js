import { useState, forwardRef } from 'react'
import { Button } from '@material-ui/core'
import useGlobal from 'utils/useGlobal'

const ProductCTA = ({ product, size, innerRef }) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants ? product.variants : []
  return variant ? (
    <Button
      ref={innerRef}
      size={size}
      variant="contained"
      color="secondary"
      onClick={async () => {
        setAdding(true)
        await addToCart(variant.sku)
        setAdding(false)
      }}
    >
      {adding ? 'Boa escolha 😉' : 'Adicionar ao carrinho'}
    </Button>
  ) : null
}

export default forwardRef((props, ref) => (
  <ProductCTA innerRef={ref} {...props} />
))
