import { memo } from 'react'
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import ingredientData, { EWG_URL } from 'data/ingredients'
import find from 'lodash/find'

const Ingredients = ({ product }) => {
  console.log('Foo')
  const ingredients = product.ingredients.map(ing =>
    find(ingredientData, data => data.inci === ing),
  )
  return (
    <div css={{ overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell css={{ color: 'inherit', fontWeight: 'bold' }}>
              Nome
            </TableCell>
            <TableCell css={{ color: 'inherit', fontWeight: 'bold' }}>
              INCI
            </TableCell>
            <TableCell css={{ color: 'inherit', fontWeight: 'bold' }}>
              O que significa?
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((ingredient, i) => (
            <TableRow key={`ingredient-${i}`}>
              {ingredient.name && <TableCell>{ingredient.name}</TableCell>}
              <TableCell colSpan={ingredient.name ? 1 : 2}>
                {ingredient.url ? (
                  <Link
                    href={EWG_URL + ingredient.url}
                    target="_blank"
                    color="secondary"
                    title="Obter mais informações"
                  >
                    {ingredient.inci}
                  </Link>
                ) : (
                  ingredient.inci
                )}
              </TableCell>
              <TableCell>{ingredient.description || '--'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default memo(Ingredients)
