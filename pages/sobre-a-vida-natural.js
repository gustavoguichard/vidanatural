import staticProps from 'lib/static-props/sobre-a-vida-natural'

import EcommerceLayout from 'layouts/ecommerce'
import Breadcrumbs from 'components/breadcrumbs'
import Hero from 'components/hero'
import IllustratedIngredients from 'components/illustrated-ingredients'
import Layout from 'components/layout'
import TeamMember from 'components/team-member'
import RichText from 'components/rich-text'
import SloganSvg from 'components/svg/slogan-faco'
import SEO from 'components/seo'

const AboutPage = ({ team, page }) => (
  <>
    <SEO
      title="Sobre a Vida Natural"
      description="Uma empresa  feita por amigos, unidos pelo propósito da transparência, que se importam com aquilo que colocamos todos os dias no nosso maior orgão de absorção - a pele."
    />
    <Hero size="small" background="/static/images/banner.jpg">
      <div className="max-w-screen-md px-16 py-6 my-12">
        <SloganSvg className="h-24 max-w-full m-auto" />
        <RichText className="m-4 text-lg">
          {page.data.banner_description}
        </RichText>
      </div>
    </Hero>
    <div className="flex flex-col items-center">
      <div className="px-10 sm:w-8/12">
        <Breadcrumbs className="mb-6 -mt-6">Sobre a VN</Breadcrumbs>
        <RichText>{page.data.content}</RichText>
      </div>
    </div>
    <div className="max-w-screen-xl px-10 py-6 mx-auto mt-6 bg-white sm:bg-transparent">
      <div
        id="quem-somos"
        className="relative z-10 sm:px-10 sm:py-6 sm:shadow-lg sm:bg-white sm:rounded-lg"
      >
        <h4 className="mb-4 text-2xl font-bold tracking-tight">Quem somos?</h4>
        <div className="grid gap-8 md:grid-cols-2">
          {team.map((member) => (
            <TeamMember key={member.uid} {...member.data} />
          ))}
        </div>
      </div>
    </div>
    <IllustratedIngredients {...page.data} />
  </>
)

AboutPage.getLayout = EcommerceLayout
export const getStaticProps = staticProps
export default AboutPage
