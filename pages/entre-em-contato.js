import Script from 'next/script'
import { FaWhatsapp } from 'react-icons/fa'

import EcommerceLayout from 'layouts/ecommerce'
import Breadcrumbs from 'components/breadcrumbs'
import SEO from 'components/seo'
import Form from 'components/form'
import Hero from 'components/hero'
import PaperContent from 'components/paper-content'
import SloganSvg from 'components/svg/slogan-conecto'

const ContactPage = () => (
  <>
    <SEO title="Entre em contato" />
    <Script
      src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA}`}
      strategy="lazyOnload"
    />
    <Hero size="small" background="/static/images/banner.jpg">
      <div className="max-w-screen-sm px-16 py-6 my-12">
        <SloganSvg className="h-24 max-w-full" />
      </div>
    </Hero>
    <PaperContent>
      <Breadcrumbs className="mb-6 -mt-6">Entre em contato</Breadcrumbs>
      <h3 className="text-3xl font-bold tracking-tight">
        Queremos ouvir você!
      </h3>
      <p className="mt-2 mb-6">
        Estamos abertos a ouvir qualquer sugestão, reclamação ou um oizinho.
        <br />
        Nós retornaremos o contato assim que possível.
      </p>
      <div className="flex flex-col justify-between md:flex-row">
        <div className="w-full mb-8 md:w-7/12">
          <Form />
        </div>
        <div className="w-full md:w-1/3 rich-text">
          <p>
            <strong>Endereço</strong>
            <br />
            Antolino E. Martins, 106
            <br />
            Vila Esperança, Imbituba / SC
            <br />
            88780-000
          </p>
          <p>
            <strong>Ligue ou envie uma mensagem</strong>
            <br />
            <span className="inline-flex items-center">
              <a
                className="inline-block mr-1 text-teal-600"
                href="https://wa.me/5548991039557"
                title="Enviar mensagem de whatsapp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaWhatsapp />
              </a>{' '}
              +55 (48) 99103-9557
            </span>
          </p>
          <p>
            <strong>Informações da Empresa</strong>
            <br />
            Vida Natural Cosmética Consciente LTDA
            <br />
            CNPJ: 24.288.982/0001-27
            <br />
            Responsável Técnico CRQ 1330293
            <br />
            Res ANVISA Nº 343/05
            <br />
            AFE Nº 4.00.537-0
          </p>
        </div>
      </div>
    </PaperContent>
  </>
)

ContactPage.getLayout = EcommerceLayout
export default ContactPage
