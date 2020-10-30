import Hero from 'components/hero'
import Layout from 'components/layout'
import Link from 'components/link'

const Page = () => (
  <Layout title="Gratos pelo contato">
    <Hero size="full" background="/static/images/capa-pb.jpg">
      <h2 className="text-4xl font-bold">Agradecemos pelo contato!</h2>
      <p className="mt-2 text-lg">
        Retornaremos assim que possível.
        <br />
        <Link className="font-semibold text-teal-400" href="/">
          Voltar para a Homepage
        </Link>
      </p>
    </Hero>
  </Layout>
)

export default Page
