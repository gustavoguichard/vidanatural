import Img from 'components/img'

const Icon = ({ path, title, size = 75 }) => (
  <Img
    className="m-6"
    width={size}
    height={size}
    src={`/static/svgs/${path}.svg`}
    alt={title}
    title={title}
  />
)

const Certifications = () => (
  <div className="w-full bg-gray-50">
    <div className="flex flex-wrap justify-around w-full max-w-screen-xl py-6 mx-auto">
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
    </div>
  </div>
)

export default Certifications
