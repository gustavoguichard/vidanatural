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
    <Layout title={`${firstName} usa cosmética consciente!`}>
      <Hero size="small" background="/static/images/banner.jpg">
        <div className="my-12 py-6 px-16 max-w-screen-sm">
          <img
            className="max-w-full h-24"
            src={sloganImg}
            alt="Eu uso | cosmética consciente"
          />
          <p className="m-4 text-lg max-w-2xl">
            Descubra o que motiva <strong>{firstName}</strong> a usar os
            produtos da VN
          </p>
        </div>
      </Hero>
      <PaperContent maxWidth="md">
        <div className="-mb-8">
          <Breadcrumbs
            className="-mt-6 mb-6"
            links={[{ title: 'Eu uso', href: '/eu-uso-cosmetica-consciente' }]}
          >
            {name}
          </Breadcrumbs>
          <div className="my-4 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:space-x-4 md:space-x-0 lg:space-x-4 space-y-2 sm:space-y-0 md:space-y-2 lg:space-y-0">
            <Img
              className="sm:w-1/3 md:w-auto lg:w-1/3 md: rounded-lg self-stretch object-cover object-top"
              alt={name}
              src={picture[is_long ? 'long' : 'square'].url}
            />
            <div>
              <h5 className="text-lg font-semibold tracking-tight">{name}</h5>
              <p className="mb-2 text-sm leading-tight text-gray-600">
                {role}
                {role ? <br /> : null}
                {location}
              </p>
              <RichText className="text-gray-700 leading-relaxed">
                {content}
              </RichText>
              <CTALink className="mt-2" href="/eu-uso-cosmetica-consciente">
                Mais depoimentos
              </CTALink>
            </div>
          </div>
        </div>
      </PaperContent>
    </Layout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default ContentPage
