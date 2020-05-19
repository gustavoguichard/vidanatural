import { TextField } from '@material-ui/core'
import theme from 'lib/theme'

const Input = ({ name, ...props }) => (
  <TextField
    id={name}
    name={name}
    {...props}
    css={{ marginBottom: theme.spacing(2) }}
    variant="outlined"
    fullWidth
  />
)

export default Input
