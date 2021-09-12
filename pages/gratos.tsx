import EcommerceLayout from 'layouts/ecommerce'
import Hero from 'components/hero'
import Link from 'components/link'
import SEO from 'components/seo'

const ThankPage = () => (
  <Hero size="full" background="/static/images/capa-pb.jpg">
    <SEO title="Gratos pelo contato" />
    <h2 className="text-4xl font-bold">Agradecemos pelo contato!</h2>
    <p className="mt-2 text-lg">
      Retornaremos assim que possível.
      <br />
      <Link className="font-semibold text-teal-400" href="/">
        Voltar para a Homepage
      </Link>
    </p>
  </Hero>
)

ThankPage.getLayout = EcommerceLayout
export default ThankPage
