import staticProps from 'lib/static-props/equipe-uid'
import staticPaths from 'lib/static-paths/equipe-uid'

import EcommerceLayout from 'layouts/ecommerce'
import SEO from 'components/seo'
import Hero from 'components/hero'
import PaperContent from 'components/paper-content'
import SloganSvg from 'components/svg/slogan-faco'
import TeamMember from 'components/team-member'

const MemberPage = ({ name, ...props }) => {
  const [firstName] = name.split(' ')
  return (
    <>
      <SEO title={`${firstName} faz cosmética consciente!`} />
      <Hero size="small" background="/static/images/banner.jpg">
        <div className="max-w-screen-sm px-16 py-6 my-12">
          <SloganSvg className="h-24 max-w-full" />
          <p className="max-w-2xl m-4 text-lg">
            Conheça quem faz a <strong>Vida Natural</strong> acontecer!
          </p>
        </div>
      </Hero>
      <PaperContent maxWidth="md">
        <div className="-mb-8">
          <TeamMember full {...props} name={name} />
        </div>
      </PaperContent>
    </>
  )
}

MemberPage.getLayout = EcommerceLayout
export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default MemberPage
