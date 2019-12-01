import { Paper, Typography } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import MdContent from 'src/components/MdContent'
import theme from 'src/ui/theme'

const ProductTitle = ({ product, showCta = true, dark }) => (
  <Paper
    elevation={3}
    css={{
      backgroundColor: 'rgba(255, 255, 255, .85)',
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
    }}
  >
    <Typography variant="h3" color={dark ? 'textSecondary' : undefined}>
      {product.name}
    </Typography>
    <MdContent
      css={{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        fontWeight: dark ? 500 : 400,
        color: dark ? theme.palette.text.secondary : theme.palette.text.hint,
      }}
      className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary"
      content={product.subtitle}
    />
    {showCta && (
      <CTAButton
        color={dark ? 'inherit' : 'secondary'}
        href={product.slug ? `/produto/${product.slug}` : `/${product.path}`}
        prefetch={false}
      >
        Saiba mais
      </CTAButton>
    )}
  </Paper>
)

export default ProductTitle
