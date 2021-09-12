import staticPaths from 'lib/static-paths/eu-uso-uid'
import staticProps from 'lib/static-props/eu-uso-uid'

import EcommerceLayout from 'layouts/ecommerce'
import SEO from 'components/seo'
import CTAButton from 'components/cta-button'
import Hero from 'components/hero'
import PaperContent from 'components/paper-content'
import PersonCard from 'components/person-card'
import SloganSvg from 'components/svg/slogan'

const ContentPage = ({ data }) => {
  const { content, name, picture, role, location, is_long } = data
  const [firstName] = name.split(' ')
  return (
    <>
      <SEO title={`${firstName} usa cosmética consciente!`} />
      <Hero size="small" background="/static/images/banner.jpg">
        <div className="max-w-screen-sm px-16 py-6 my-12">
          <SloganSvg className="h-24 max-w-full" />
          <p className="max-w-2xl m-4 text-lg">
            Descubra o que motiva <strong>{firstName}</strong> a usar os
            produtos da VN
          </p>
        </div>
      </Hero>
      <PaperContent maxWidth="md">
        <div className="-mb-8">
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
            <CTAButton className="mt-2" href="/eu-uso-cosmetica-consciente">
              Mais depoimentos
            </CTAButton>
          </PersonCard>
        </div>
      </PaperContent>
    </>
  )
}

ContentPage.getLayout = EcommerceLayout
export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default ContentPage
