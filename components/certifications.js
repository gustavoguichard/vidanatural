import { Box, Container } from '@material-ui/core'

import Img from 'components/img'

const Icon = ({ path, title, size = 75 }) => (
  <Img
    hideSpinner
    css={{ margin: 12 }}
    width={size}
    height={size}
    src={`/static/svgs/${path}.svg`}
    alt={title}
    title={title}
  />
)

const Certifications = (props) => (
  <Container>
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
  </Container>
)

export default Certifications