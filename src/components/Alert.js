import { SnackbarContent } from '@material-ui/core'
import theme from 'src/ui/theme'

const Alert = ({ message, color = theme.palette.error.main, ...props }) =>
  message ? (
    <SnackbarContent
      css={{
        backgroundColor: color,
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(2),
      }}
      {...props}
      message={message}
    />
  ) : null

export default Alert
