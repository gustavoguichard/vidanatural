import EcommerceLayout from 'layouts/ecommerce'
import Hero from 'components/hero'
import SEO from 'components/seo'
import Link from 'components/link'

const ErrorPage = ({
  href = '/',
  children = 'Procure outra página no nosso menu.',
  linkText = 'Voltar para a Homepage',
  code = 404,
  title = 'Página não encontrada',
}) => {
  const titleWithCode = [code, title].join('. ')
  return (
    <Hero size="full" background="/static/images/capa-pb.jpg">
      <SEO title={titleWithCode} />
      <h2 className="text-4xl font-bold">{titleWithCode}</h2>
      <p className="mt-2 text-lg">
        {children}
        <br />
        <Link href={href} className="font-semibold text-teal-400">
          {linkText}
        </Link>
      </p>
    </Hero>
  )
}

ErrorPage.getLayout = EcommerceLayout
export default ErrorPage
