import { useState, forwardRef } from 'react'
import { Button, Box, FormControl, MenuItem, Select } from '@material-ui/core'
import useGlobal from 'lib/use-global'

const ProductCTA = ({ product, size, innerRef, hideQuantity }) => {
  const [adding, setAdding] = useState(false)
  const [, { addToCart }] = useGlobal()
  const [variant] = product.variants ? product.variants : []

  const [quantity, setQuantity] = useState(1)
  const changeQuantity = ({ target }) => setQuantity(target.value)

  return variant ? (
    <Box display="flex">
      {hideQuantity ? null : (
        <FormControl css={{ marginRight: 4 }} variant="outlined">
          <Select value={quantity} onChange={changeQuantity}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <MenuItem key={n} value={n}>
                {n}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <Button
        ref={innerRef}
        size={size}
        variant="contained"
        color="secondary"
        onClick={async () => {
          setAdding(true)
          await addToCart(variant.sku, quantity)
          setAdding(false)
        }}
      >
        {adding ? 'Boa escolha 😉' : 'Adicionar ao carrinho'}
      </Button>
    </Box>
  ) : null
}

export default forwardRef((props, ref) => (
  <ProductCTA innerRef={ref} {...props} />
))
