import Hero from 'components/hero'
import Layout from 'components/layout'
import Link from 'next/link'

const Page = () => (
  <Layout title="Gratos pelo contato">
    <Hero size="full" background="/static/images/capa-pb.jpg">
      <h2 className="text-4xl font-bold">Agradecemos pelo contato!</h2>
      <p className="mt-2 text-lg">
        Retornaremos assim que possível.
        <br />
        <Link href="/">
          <a className="font-semibold text-teal-400">Voltar para a Homepage</a>
        </Link>
      </p>
    </Hero>
  </Layout>
)

export default Page
