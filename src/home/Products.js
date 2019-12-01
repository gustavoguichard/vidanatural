import find from 'lodash/find'
import ProductContainer from 'src/home/ProductContainer'
import ProductImg from 'src/home/ProductImg'
import products from 'data/products'

const getProduct = path => find(products, p => p.path === path)
const desodorantePasta = getProduct('desodorante-em-pasta')
const desodoranteRollon = getProduct('desodorante-rollon')
const poDental = getProduct('po-dental')
// const oleo = getProduct('oleo-hidratante')
// const facial = getProduct('hidratante-facial')
const rosa = getProduct('rosa-mosqueta')
const xampu = getProduct('xampu-em-barra')

const Products = () => (
  <>
    <ProductContainer product={desodorantePasta}>
      <ProductImg product={desodorantePasta} width={460} />
    </ProductContainer>
    <ProductContainer product={rosa}>
      <ProductImg product={rosa} height={440} />
    </ProductContainer>
    <ProductContainer product={desodoranteRollon}>
      <ProductImg product={desodoranteRollon} height={500} />
    </ProductContainer>
    <ProductContainer product={xampu}>
      <ProductImg product={xampu} width={420} />
    </ProductContainer>
    <ProductContainer product={poDental}>
      <ProductImg product={poDental} height={400} />
    </ProductContainer>
  </>
)

export default Products
