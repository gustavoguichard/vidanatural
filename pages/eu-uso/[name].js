import staticPaths from 'lib/static-paths/eu-uso-uid'
import staticProps from 'lib/static-props/eu-uso-uid'

import Breadcrumbs from 'components/breadcrumbs'
import CTALink from 'components/cta-link'
import Hero from 'components/hero'
import Img from 'components/img'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'
import RichText from 'components/rich-text'

import sloganImg from 'public/static/svgs/slogan.svg'

const ContentPage = ({ data }) => {
  const { content, name, picture, role, location, is_long } = data
  const [firstName] = name.split(' ')
  return (
    <Layout title="Eu uso cosmética consciente!">
      <Hero size="small" background="/static/images/banner.jpg">
        <div className="my-12 py-6 px-16 max-w-screen-sm">
          <img
            className="max-w-full h-24"
            src={sloganImg}
            alt="Eu uso | cosmética consciente"
          />
          <p className="m-4 text-lg max-w-2xl">
            Descubra o que motiva {firstName} a usar os produtos da VN
          </p>
        </div>
      </Hero>
      <PaperContent>
        <Breadcrumbs
          className="-mt-6 mb-6"
          links={[{ title: 'Eu uso', href: '/eu-uso-cosmetica-consciente' }]}
        >
          {name}
        </Breadcrumbs>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 justify-center md:items-start items-center">
          <div className="sm:w-8/12 md:w-6/12">
            <Img
              className="max-w-full"
              alt={name}
              src={picture[is_long ? 'long' : 'square'].url}
            />
          </div>
          <div className="sm:w-8/12 md:w-6/12">
            <h1 className="text-4xl font-bold tracking-tighter leading-none">
              {name}
            </h1>
            <p className="text-gray-600 mb-4 text-sm">
              {role}
              {role ? <br /> : null}
              {location}
            </p>
            <RichText className="text-gray-700">{content}</RichText>
            <CTALink href="/eu-uso-cosmetica-consciente">
              Mais depoimentos
            </CTALink>
          </div>
        </div>
      </PaperContent>
    </Layout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default ContentPage
