import staticPaths from 'lib/static-paths/eu-uso-uid'
import staticProps from 'lib/static-props/eu-uso-uid'

import Breadcrumbs from 'components/breadcrumbs'
import CTALink from 'components/cta-link'
import Hero from 'components/hero'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'
import PersonCard from 'components/person-card'

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
          <PersonCard
            image={picture[is_long ? 'long' : 'square'].url}
            name={name}
            content={content}
            title={
              <span className="mb-2 text-sm font-normal text-gray-600">
                {role}
                {role && <br />}
                {location}
              </span>
            }
          >
            <CTALink className="mt-2" href="/eu-uso-cosmetica-consciente">
              Mais depoimentos
            </CTALink>
          </PersonCard>
        </div>
      </PaperContent>
    </Layout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default ContentPage
