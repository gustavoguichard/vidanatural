import { Button } from '@material-ui/core'
import theme from 'src/ui/theme'

const CTAButton = ({
  color = 'primary',
  size = 'large',
  variant = 'contained',
  center = true,
  children,
  IconComponent,
  ...props
}) => {
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      css={{
        display: 'flex',
        margin: center ? 'auto' : null,
        marginTop: `${theme.spacing(4)}px`,
        marginBottom: `${theme.spacing(4)}px`,
        color: theme.palette.primary,
      }}
      {...props}
    >
      {children}
      {IconComponent && <IconComponent css={{ marginLeft: theme.spacing() }} />}
    </Button>
  )
}

export default CTAButton
