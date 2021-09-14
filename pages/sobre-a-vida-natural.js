import { RichText as PrismicRichText } from 'prismic-reactjs'
import staticProps from 'lib/static-props/sobre-a-vida-natural'

import EcommerceLayout from 'layouts/ecommerce'
import Img from 'components/img'
import IllustratedIngredients from 'components/illustrated-ingredients'
import SocialLinks from 'components/social-links'
import SEO from 'components/seo'

const AboutPage = ({ team, page }) => {
  return (
    <>
      <SEO
        title="Sobre a Vida Natural"
        description="Uma empresa  feita por amigos, unidos pelo propósito da transparência, que se importam com aquilo que colocamos todos os dias no nosso maior orgão de absorção - a pele."
      />

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <Img
              className="object-cover w-full h-56 lg:absolute lg:h-full"
              src="/static/images/equipe-costas.jpg"
              alt="Equipe da Vida Natural"
            />
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto text-base max-w-prose lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="font-semibold leading-6 tracking-wide uppercase text-secondary-600">
                Sobre a VN
              </h2>
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Cosmética Consciente
              </h3>
              <div className="mt-8 text-lg text-gray-500">
                <PrismicRichText render={page.data.banner_description} />
              </div>
              <div className="mt-5 prose text-gray-500 prose-secondary">
                <PrismicRichText render={page.data.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-300" id="quem-somos">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl">
                Quem somos
              </h2>
              <p className="text-xl text-primary-900/80">
                Antes de tudo amigos, família e boas relações. E a missão de
                fazer o nosso melhor!
              </p>
            </div>
            <ul
              role="list"
              className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
            >
              {team.map((person) => (
                <li
                  key={person.data.name}
                  className="px-6 py-10 rounded-lg bg-primary-800 xl:px-10"
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
                        <p className="text-primary-400">{person.data.role}</p>
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
