import BackgroundImg from 'components/background-img'
import CTAButton from 'components/cta-button'
import Hero from 'components/hero'
import Layout from 'components/layout'

const Page = () => (
  <Layout title="Black Friday">
    <Hero size="full" background="/static/images/bf/banner.jpg">
      <h2 className="text-6xl uppercase tracking-tight font-extrabold">
        Black friday <span className="font-semibold">VN</span>
      </h2>
      <p className="text-2xl font-semibold">
        Preparamos uma oferta especial para você que já conhece nossos produtos.
        <br />
        Ao clicar nos links desta página você receberá um cupom de desconto que
        será aplicado na finalização da compra.{' '}
        <span aria-label="Emoji de mãos celbrando" role="img">
          🙌
        </span>
      </p>
      <CTAButton inverted className="mt-4" href="/produtos?ccc=BLACKFRIDAY">
        Comprar com o cupom
      </CTAButton>
    </Hero>
    <div className="max-w-screen-xl p-2 m-auto flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0">
      <div className="flex-grow relative overflow-hidden bg-gray-900 text-white">
        <BackgroundImg
          filter="saturate(0)"
          src="/static/images/bf/desodorantes.jpg"
        />
        <div
          css={{ minHeight: 300 }}
          className="px-6 py-12 flex-grow flex flex-col items-center justify-center relative z-10 bg-black bg-opacity-50"
        >
          <p className="font-extrabold leading-tight tracking-tight text-3xl text-center">
            <span className="text-7xl tracking-tighter leading-none">
              20% OFF
            </span>
            <span className="block -mt-1">nos</span>
            <span className="uppercase text-4xl truncate">Desodorantes</span>
          </p>
          <CTAButton
            className="mt-3"
            mini
            inverted
            href="/produtos?filter=desodorante&ccc=BLACKFRIDAY"
          >
            Comprar com o cupom
          </CTAButton>
        </div>
      </div>
      <div className="flex-grow relative overflow-hidden bg-gray-900 text-white">
        <BackgroundImg
          filter="saturate(0)"
          src="/static/images/bf/hidratantes.jpg"
        />
        <div
          css={{ minHeight: 300 }}
          className="px-6 py-12 flex-grow flex flex-col items-center justify-center relative z-10 bg-black bg-opacity-50"
        >
          <p className="font-extrabold leading-tight tracking-tight text-3xl text-center">
            <span className="text-7xl tracking-tighter leading-none">
              15% OFF
            </span>
            <span className="block -mt-1">nos</span>
            <span className="uppercase text-4xl truncate">Hidratantes</span>
          </p>
          <CTAButton
            className="mt-3"
            mini
            inverted
            href="/produtos?filter=hidratante&ccc=BLACKFRIDAY"
          >
            Comprar com o cupom
          </CTAButton>
        </div>
      </div>
      <div className="flex-grow relative overflow-hidden bg-gray-900 text-white">
        <BackgroundImg
          filter="saturate(0)"
          src="/static/images/bf/xampus.jpg"
        />
        <div
          css={{ minHeight: 300 }}
          className="px-6 py-12 flex-grow flex flex-col items-center justify-center relative z-10 bg-black bg-opacity-50"
        >
          <p className="font-extrabold leading-tight tracking-tight text-3xl text-center">
            <span className="text-7xl tracking-tighter leading-none">
              10% OFF
            </span>
            <span className="block -mt-1">nos</span>
            <span className="uppercase text-4xl truncate">Xampus</span>
          </p>
          <CTAButton
            className="mt-3"
            mini
            inverted
            href="/produto/xampu-em-barra-6?ccc=BLACKFRIDAY"
          >
            Comprar com o cupom
          </CTAButton>
        </div>
      </div>
    </div>
  </Layout>
)

export default Page
