import staticProps from 'lib/static-props/sobre-a-vida-natural'

import Breadcrumbs from 'components/breadcrumbs'
import Hero from 'components/hero'
import IllustratedIngredients from 'components/illustrated-ingredients'
import Layout from 'components/layout'
import TeamMember from 'components/team-member'
import PaperContent from 'components/paper-content'
import RichText from 'components/rich-text'

import sloganImg from 'public/static/svgs/eufaco.svg'

const AboutPage = ({ team, page }) => {
  return (
    <Layout
      title="Sobre a Vida Natural"
      seo={{
        description:
          'Uma empresa  feita por amigos, unidos pelo propósito da transparência, que se importam com aquilo que colocamos todos os dias no nosso maior orgão de absorção - a pele.',
      }}
    >
      <Hero size="small" background="/static/images/banner.jpg">
        <div className="my-12 py-6 px-16 max-w-screen-md">
          <img
            className="max-w-full h-24 m-auto"
            src={sloganImg}
            alt="Eu faço | cosmética consciente"
          />
          <RichText className="m-4 text-lg">
            {page.data.banner_description}
          </RichText>
        </div>
      </Hero>
      <PaperContent>
        <div className="flex flex-col items-center">
          <div className="sm:w-8/12">
            <Breadcrumbs className="-mt-6 mb-6">Sobre a VN</Breadcrumbs>
            <RichText>{page.data.content}</RichText>
          </div>
          <div id="quem-somos">
            <h4 className="text-2xl mb-4 mt-8 font-bold tracking-tight leading-none">
              Quem somos?
            </h4>
            <div className="grid gap-8 md:grid-cols-2">
              {team.map((member) => (
                <TeamMember key={member.uid} {...member.data} />
              ))}
            </div>
          </div>
        </div>
      </PaperContent>
      <IllustratedIngredients {...page.data} />
    </Layout>
  )
}

export const getStaticProps = staticProps
export default AboutPage
