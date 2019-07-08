import { TextField } from '@material-ui/core'
import theme from 'src/ui/theme'

const Input = ({ id, ...props }) => (
  <TextField
    id={id}
    name={props.name || id}
    {...props}
    css={{ marginBottom: theme.spacing(2) }}
    variant="outlined"
    fullWidth
  />
)

export default Input
