import ReactMarkdown from 'react-markdown'
import { Typography } from '@material-ui/core'
import { nl2Br } from 'utils/helpers'
import Hero from 'src/components/Hero'
import theme from 'src/ui/theme'

const ProductHero = ({ product }) => (
  <Hero background={`/static/images/product-images/${product.path}.jpg`}>
    <Typography variant="h2">{product.fullName}</Typography>
    <ReactMarkdown
      css={{ margin: theme.spacing(3), fontWeight: 500 }}
      className="MuiTypography-root MuiTypography-body1"
      escapeHtml={false}
      source={nl2Br(product.fullSubtitle || product.subtitle)}
    />
  </Hero>
)

export default ProductHero
