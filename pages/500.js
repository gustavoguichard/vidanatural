import EcommerceLayout from 'layouts/ecommerce'
import Hero from 'components/hero'
import SEO from 'components/seo'
import Link from 'components/link'

const Error500Page = ({
  href = '/',
  children = 'Por favor, tente novamente mais tarde.',
  linkText = 'Voltar para a Homepage',
  code = 500,
  title = 'Ocorreu algum erro no nosso servidor',
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

Error500Page.getLayout = EcommerceLayout
export default Error500Page
