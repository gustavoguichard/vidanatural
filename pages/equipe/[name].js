import staticProps from 'lib/static-props/equipe-uid'
import staticPaths from 'lib/static-paths/equipe-uid'

import Breadcrumbs from 'components/breadcrumbs'
import Hero from 'components/hero'
import Layout from 'components/layout'
import PaperContent from 'components/paper-content'
import TeamMember from 'components/team-member'

import sloganImg from 'public/static/svgs/eufaco.svg'

const MemberPage = ({ name, ...props }) => {
  const [firstName] = name.split(' ')
  return (
    <Layout title={`${firstName} faz cosmética consciente!`}>
      <Hero size="small" background="/static/images/banner.jpg">
        <div className="my-12 py-6 px-16 max-w-screen-sm">
          <img
            className="max-w-full h-24"
            src={sloganImg}
            alt="Eu faço | cosmética consciente"
          />
          <p className="m-4 text-lg max-w-2xl">
            Conheça quem faz a <strong>Vida Natural</strong> acontecer!
          </p>
        </div>
      </Hero>
      <PaperContent maxWidth="md">
        <div className="-mb-8">
          <Breadcrumbs
            className="-mt-6 mb-6"
            links={[
              { title: 'Equipe', href: '/sobre-a-vida-natural#quem-somos' },
            ]}
          >
            {firstName}
          </Breadcrumbs>
          <TeamMember full {...props} name={name} />
        </div>
      </PaperContent>
    </Layout>
  )
}

export const getStaticPaths = staticPaths
export const getStaticProps = staticProps
export default MemberPage
