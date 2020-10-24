import CTAButton from 'components/cta-button'

const About = () => (
  <div className="bg-white py-12 sm:p-0">
    <div className="max-w-screen-xl m-auto sm:p-24">
      <div className="bg-gray-100 flex-col md:flex-row flex justify-center items-stretch">
        <div
          css={{ backgroundImage: 'url("/static/images/afro.jpg" )' }}
          className="h-64 md:h-auto bg-cover bg-center md:w-6/12 transform lg:-translate-x-16  lg:-translate-y-16"
        />
        <div className="m-10 s:m-16 lg:mb-0 md:w-6/12 transform lg:-translate-x-8">
          <h3 className="text-3xl tracking-tight leading-none font-semibold mb-4">
            Uma ideia, um movimento
          </h3>
          <div className="text-gray-700">
            <p className="mb-4">
              Nossos cosméticos são feitos a mão, produzidos em pequenos lotes,
              com ingredientes naturais, biodegradáveis, com fórmulas
              minimalistas e livre de crueldade contra animais.
            </p>
            <p className="mb-4">
              Queremos que você possa usar no seu dia a dia produtos naturais,
              sustentáveis e altamente eficientes!
            </p>
            <CTAButton mini href="/sobre-a-vida-natural#quem-somos">
              Conheça nosso time
            </CTAButton>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex-col md:flex-row flex justify-center items-stretch">
        <div
          css={{ backgroundImage: 'url("/static/images/folhas.jpg")' }}
          className="h-64 md:h-auto bg-cover bg-center md:w-6/12 order-first md:order-1 transform lg:translate-x-16  lg:translate-y-16"
        />
        <div className="m-10 s:m-16 md:w-6/12 transform lg:translate-x-8">
          <h3 className="text-3xl tracking-tight leading-none font-semibold mb-4">
            Produtos de alta qualidade
          </h3>
          <div className="text-gray-700">
            <p className="mb-4">
              Com nossos cosméticos queremos provar que é possível obter um alto
              nível de eficiência sem prejudicar o corpo e o meio ambiente.
            </p>
            <p className="mb-4">
              Afinal, você usa cosméticos diariamente por toda a sua vida. É bom
              ter completa noção do que vai neles, certo?
            </p>
            <CTAButton mini href="/sobre-a-vida-natural#ingredientes">
              Veja nossos ingredientes
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
