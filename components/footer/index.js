import FooterMenu from './footer-menu'
import NewsForm from './news-form'
import SocialList from './social-list'

const year = new Date().getFullYear()

const Footer = () => (
  <div id="contato" className="pb-20 pt-16 bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl w-full px-6 flex flex-wrap">
      <div className="mb-6 sm:w-2/3 md:w-1/2">
        <FooterMenu />
      </div>
      <div className="mb-6 order-first sm:order-none sm:w-1/3 w-full md:w-1/2 lg:w-5/12">
        <NewsForm />
      </div>
      <div className="mb-2 -mt-2 w-full lg:w-1/12">
        <SocialList />
      </div>
      <p className="text-sm w-full">
        Vida Natural&reg; {year} • Florianópolis / SC
        <br />
        <a
          className="font-semibold hover:text-teal-300"
          href="mailto:falecom@vidanatural.eco.br"
        >
          falecom@vidanatural.eco.br
        </a>{' '}
        | CNPJ: 24.288.982/0001-27
      </p>
    </div>
  </div>
)

export default Footer
