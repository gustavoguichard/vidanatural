import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { RichText } from 'prismic-reactjs'

import InciLink from 'components/inci-link'

const IngredientsDesktop = ({ data }) => {
  return (
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
            {item.title && <TableCell>{item.title}</TableCell>}
            <TableCell colSpan={item.title ? 1 : 2}>
              <InciLink {...item} />
            </TableCell>
            <TableCell>
              {item.description ? <RichText render={item.description} /> : '--'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default IngredientsDesktop
