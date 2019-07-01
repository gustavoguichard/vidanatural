import { Button } from '@material-ui/core'
import theme from 'src/ui/theme'

const CTAButton = ({
  color = 'primary',
  size = 'large',
  variant = 'contained',
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
        display: 'flex !important',
        margin: 'auto !important',
        marginTop: `${theme.spacing(4)}px !important`,
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
