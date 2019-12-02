import { Box } from '@material-ui/core'
import Img from 'src/components/Img'

const Icon = ({ path, title, size = 75 }) => (
  <Img
    css={{ margin: 10 }}
    width={size}
    src={require(`../../static/svgs/${path}.svg`)}
    alt={title}
    title={title}
  />
)

const Certifications = props => (
  <Box
    display="flex"
    justifyContent="space-around"
    flexWrap="wrap"
    mb={3}
    mt={3}
    {...props}
  >
    <Icon title="Certificados pela ANVISA" path="anvisa" size={68} />
    <Icon
      title="Investimos na compensação ambiental das embalagens que produzimos"
      path="eureciclo"
    />
    <Icon
      title="Livre de parabenos e outros absurdos sintéticos"
      path="parabenos"
    />
    <Icon title="Produtos artesanais" path="artesanal" />
    <Icon title="Livres de crueldade animal" path="cruelty-free" />
    <Icon title="Sem fragrâncias sintéticas" path="fragrancias" />
  </Box>
)

export default Certifications
