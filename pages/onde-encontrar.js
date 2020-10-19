import map from 'lodash/map'

import Breadcrumbs from 'components/breadcrumbs'
import Hero from 'components/hero'
import Img from 'components/img'
import Layout from 'components/layout'
import Link from 'components/link'
import PaperContent from 'components/paper-content'
import StatePannel from 'components/state-pannel'

import parsedClients from 'data/parsed-clients'
import sloganImg from 'public/static/svgs/euquero.svg'

const OndeEncontrar = () => (
  <Layout title="Onde encontrar">
    <Hero size="small" background="/static/images/onde-encontrar.jpg">
      <div className="my-12 py-6 px-16 max-w-screen-sm">
        <img
          className="max-w-full h-24"
          src={sloganImg}
          alt="Eu quero | cosmética consciente"
        />
      </div>
    </Hero>
    <PaperContent>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="lg:w-8/12">
          <Breadcrumbs
            links={[{ title: 'Sobre nós', href: '/sobre-a-vida-natural' }]}
            className="-mt-6 mb-6"
          >
            Onde encontrar?
          </Breadcrumbs>
          <h3 className="text-3xl font-bold tracking-tight leading-none">
            Procure pelo estado na lista abaixo
          </h3>
          <div className="mt-4 mb-8 rich-text">
            <p>
              Nós preparamos uma listagem de todas as lojas e distribuidores de
              nossos produtos no Brasil. Fique ligade, esta página será
              atualizada constantemente.
            </p>
            <p>
              Se não achar um distribuidor na sua cidade/região, você pode{' '}
              <Link href="/produtos">comprar aqui</Link>.
            </p>
            <p>
              Caso queira distribuir nossos produtos em sua região,{' '}
              <Link href="/entre-em-contato">entre em contato</Link> conosco,
              vamos fazer acontecer!
            </p>
          </div>
          {map(parsedClients, (region, state) => (
            <StatePannel title={state} region={region} key={state} />
          ))}
        </div>
        <div className="lg:w-3/12 lg:flex">
          <Img
            className="max-w-full mt-3 m-auto w-64"
            src="/static/svgs/where-to-find.svg"
            alt="Onde encontrar"
          />
        </div>
      </div>
    </PaperContent>
  </Layout>
)

export default OndeEncontrar
