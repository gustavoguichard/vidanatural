import ButtonLink from 'src/components/ButtonLink'
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
    <ButtonLink
      color={color}
      size={size}
      variant={variant}
      css={{
        display: 'flex',
        margin: center ? 'auto' : null,
        color: theme.palette.primary,
      }}
      {...props}
    >
      {children}
      {IconComponent && <IconComponent css={{ marginLeft: theme.spacing() }} />}
    </ButtonLink>
  )
}

export default CTAButton
