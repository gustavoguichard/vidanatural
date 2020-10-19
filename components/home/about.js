import CTAButton from 'components/cta-button'

const About = () => (
  <div className="bg-white py-12 sm:p-0">
    <div className="max-w-screen-xl m-auto sm:p-24">
      <div className="bg-gray-100 rounded-lg flex-col md:flex-row flex justify-center items-stretch">
        <div
          css={{ backgroundImage: 'url("/static/images/afro.jpg" )' }}
          className="h-64 md:h-auto bg-cover bg-center md:w-6/12 transform lg:-translate-x-16  lg:-translate-y-16"
        />
        <div className="m-10 s:m-16 lg:mb-0 md:w-6/12 transform lg:-translate-x-8">
          <h3 className="text-3xl tracking-tight font-semibold mb-4">
            Uma ideia, um movimento
          </h3>
          <div className="text-gray-700">
            <p className="mb-4">
              Nossos cosméticos são feitos a mão, produzidos em pequenos lotes,
              com ingredientes naturais, biodegradáveis e sustentáveis, com
              fórmulas minimalistas e livre de crueldade contra animais.
            </p>
            <p className="mb-4">
              Com nossos cosméticos queremos incentivar um movimento para
              desconstruir ideias, propor mudanças no comportamento e nos
              valores para favorecer um consumo + simples + consciente e em
              maior equilíbrio com a saúde do seu corpo e do meio ambiente.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg flex-col md:flex-row flex justify-center items-stretch">
        <div
          css={{ backgroundImage: 'url("/static/images/folhas.jpg")' }}
          className="h-64 md:h-auto bg-cover bg-center md:w-6/12 order-first md:order-1 transform lg:translate-x-16  lg:translate-y-16"
        />
        <div className="m-10 s:m-16 md:w-6/12 transform lg:translate-x-8">
          <h3 className="text-3xl tracking-tight font-semibold mb-4">
            Produtos de alta qualidade
          </h3>
          <div className="text-gray-700">
            <p className="mb-4">
              Queremos que vc possa usar no seu dia a dia produtos naturais,
              sustentáveis e altamente eficientes!
            </p>
            <p className="mb-4">
              Acreditamos no poder desse movimento! Vamos junt@s?
            </p>
            <CTAButton href="/sobre-a-vida-natural">Saiba mais</CTAButton>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
