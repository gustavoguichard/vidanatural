const Icon = ({ path, title, size = 75 }) => (
  <img
    className="m-6"
    style={{ filter: 'brightness(0.35)' }}
    width={size}
    height={size}
    src={`/static/svgs/${path}.svg`}
    alt={title}
    title={title}
  />
)

const Certifications = () => (
  <div className="max-w-screen-xl w-full flex justify-around flex-wrap mb-6 mt-6 mx-auto">
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
)

export default Certifications
