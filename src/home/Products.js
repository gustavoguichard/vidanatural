import { Button, Paper, Container, Typography, Box } from '@material-ui/core'
import PaperContent from 'src/ui/PaperContent'
import theme from 'src/ui/theme'
import Emoji from 'src/components/Emoji'

const Products = () => {
  return (
    <PaperContent>
      <Box textAlign="center" mb={2}>
        <Typography variant="h4">
          <strong>
            Não basta ser natural e sustentável,
            <br />
            tem que ser eficiente <Emoji symbol="😉" label="piscada" />
          </strong>
        </Typography>
      </Box>
    </PaperContent>
  )
}

export default Products
