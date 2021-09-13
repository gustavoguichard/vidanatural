import { RichText as PrismicRichText } from 'prismic-reactjs'
import staticProps from 'lib/static-props/sobre-a-vida-natural'

import EcommerceLayout from 'layouts/ecommerce'
import Hero from 'components/hero'
import Img from 'components/img'
import IllustratedIngredients from 'components/illustrated-ingredients'
import SocialLinks from 'components/social-links'
import RichText from 'components/rich-text'
import SloganSvg from 'components/svg/slogan-faco'
import SEO from 'components/seo'

const AboutPage = ({ team, page }) => {
  return (
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
          <RichText>{page.data.content}</RichText>
        </div>
      </div>

      <div className="bg-salmon-900">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Quem somos
              </h2>
              <p className="text-xl text-gray-300">
                Antes de tudo amigos, família e boas relações
              </p>
            </div>
            <ul
              role="list"
              className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
            >
              {team.map((person) => (
                <li
                  key={person.data.name}
                  className="px-6 py-10 rounded-lg bg-salmon-800 xl:px-10"
                >
                  <div>
                    {person.data.picture && (
                      <Img
                        className="w-40 h-40 mx-auto mb-6 rounded-full xl:w-56 xl:h-56 xl:mb-10"
                        src={person.data.picture?.url}
                        alt=""
                      />
                    )}
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-white">{person.data.name}</h3>
                        <p className="text-salmon-400">{person.data.role}</p>
                      </div>
                      <SocialLinks
                        linkedin={person.data.linkedin}
                        instagram={person.data.instagram}
                        facebook={person.data.facebook}
                        github={person.data.github}
                      />
                    </div>
                    <div className="mt-4 text-lg text-white">
                      <PrismicRichText render={person.data.bio} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <IllustratedIngredients {...page.data} />
    </>
  )
}

AboutPage.getLayout = EcommerceLayout
export const getStaticProps = staticProps
export default AboutPage
