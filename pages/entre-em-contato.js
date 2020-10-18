import { FaWhatsapp } from 'react-icons/fa'

import Breadcrumbs from 'components/breadcrumbs'
import Form from 'components/form'
import Hero from 'components/hero'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'

import sloganImg from 'public/static/svgs/euconecto.svg'

const Page = () => (
  <Layout title="Entre em contato">
    <Hero size="small" background="/static/images/banner.jpg">
      <div className="my-12 py-6 px-16 max-w-screen-sm">
        <img
          className="max-w-full h-24"
          src={sloganImg}
          alt="Eu conecto | cosmética consciente"
        />
      </div>
    </Hero>
    <PaperContent>
      <Breadcrumbs className="-mt-6 mb-6">Entre em contato</Breadcrumbs>
      <h3 className="text-3xl tracking-tight font-bold">
        Queremos ouvir você!
      </h3>
      <p className="mt-2 mb-6">
        Estamos abertos a ouvir qualquer sugestão, reclamação ou um oizinho.
        <br />
        Nós retornaremos o contato assim que possível.
      </p>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-7/12 mb-8">
          <Form />
        </div>
        <div className="w-full md:w-1/3 rich-text">
          <p>
            <strong>Endereço</strong>
            <br />
            Manoel Petronilho da Silveira, 451
            <br />
            São João do Rio Vermelho, Florianópolis / SC
            <br />
            88060-100
          </p>
          <p>
            <strong>Ligue ou envie uma mensagem</strong>
            <br />
            <span className="inline-flex items-center">
              <a
                className="inline-block text-green-500 mr-1"
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
  </Layout>
)

export default Page
