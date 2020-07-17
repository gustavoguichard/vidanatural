import Link from 'next/link'

import Hero from 'components/hero2'
import Layout from 'components/layout'

const ErrorPage = ({
  href = '/',
  children = 'Procure outra página no nosso menu.',
  linkText = 'Voltar para a Homepage',
  code = 404,
  title = 'Página não encontrada',
}) => {
  const titleWithCode = [code, title].join('. ')
  return (
    <Layout hideCertifications title={titleWithCode}>
      <Hero size="full" background="/static/images/capa-pb.jpg">
        <h2 className="text-4xl font-bold">{titleWithCode}</h2>
        <p className="mt-2 text-lg">
          {children}
          <br />
          <Link href={href}>
            <a className="font-semibold text-green-400">{linkText}</a>
          </Link>
        </p>
      </Hero>
    </Layout>
  )
}

export default ErrorPage
