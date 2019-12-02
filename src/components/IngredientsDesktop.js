import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { EWG_URL } from 'data/ingredients'

const IngredientsDesktop = ({ data }) => (
  <Table>
    <TableHead>
      <TableRow
        css={{
          '& th': {
            color: 'inherit',
            fontWeight: 'bold',
          },
        }}
      >
        <TableCell>Nome</TableCell>
        <TableCell>INCI</TableCell>
        <TableCell>O que significa?</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((item, i) => (
        <TableRow key={`item-${i}`}>
          {item.name && <TableCell>{item.name}</TableCell>}
          <TableCell colSpan={item.name ? 1 : 2}>
            {item.url ? (
              <Link
                href={EWG_URL + item.url}
                target="_blank"
                color="secondary"
                title="Obter mais informações"
              >
                {item.inci}
              </Link>
            ) : (
              item.inci
            )}
          </TableCell>
          <TableCell>{item.description || '--'}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

export default IngredientsDesktop
