import EcommerceLayout from 'layouts/ecommerce'
import Link from 'components/link'
import Img from 'components/img'

import team from '../public/static/images/equipe-frente.jpg'

const Error500Page = () => {
  return (
    <main className="relative min-h-[90vh] bg-top bg-cover sm:bg-top">
      <div className="absolute inset-0 overflow-hidden">
        <Img
          src={team}
          placeholder="blur"
          alt="Banner"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900/60" />
      <div className="relative z-10 max-w-5xl px-4 py-16 mx-auto text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold tracking-wide uppercase text-primary-200">
          Erro 500
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Opa! Parece que tivemos algum problema por aqui.
        </h1>
        <p className="mt-2 text-lg font-medium text-primary-200">
          Por favor, tente novamente mais tarde.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700"
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </main>
  )
}

Error500Page.getLayout = EcommerceLayout
export default Error500Page
