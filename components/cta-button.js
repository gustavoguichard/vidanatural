import { FaAngleRight } from 'react-icons/fa'

import theme from 'lib/theme'

import ButtonLink from 'components/button-link'

const CTAButton = ({
  color = 'secondary',
  size = 'large',
  variant = 'text',
  center = true,
  children,
  disableIcon,
  IconComponent = FaAngleRight,
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
      {disableIcon || <IconComponent css={{ marginLeft: theme.spacing() }} />}
    </ButtonLink>
  )
}

export default CTAButton
