import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'

import InciLink from 'components/inci-link'

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
    <TableBody css={{ '& tr:last-child td': { borderBottom: 'none' } }}>
      {data.map((item, i) => (
        <TableRow key={`item-${i}`}>
          {item.name && <TableCell>{item.name}</TableCell>}
          <TableCell colSpan={item.name ? 1 : 2}>
            <InciLink {...item} />
          </TableCell>
          <TableCell>{item.description || '--'}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

export default IngredientsDesktop
