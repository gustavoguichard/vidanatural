import { Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Hero from 'components/hero'
import Layout from 'components/layout'
import Link from 'components/link'

const ErrorPage = ({
  href = '/',
  children = 'Procure outra página no nosso menu.',
  linkText = 'Voltar para a Homepage',
  code = 404,
  title = 'Página não encontrada',
}) => {
  const titleWithCode = [code, title].join(' - ')
  return (
    <Layout hideCertifications title={titleWithCode}>
      <Hero size="full" background="/static/images/capa-pb.jpg">
        <Typography variant="h2">{titleWithCode}</Typography>
        <Typography css={{ marginTop: theme.spacing(4) }} variant="body1">
          {children}
          <br />
          <Link href={href}>{linkText}</Link>
        </Typography>
      </Hero>
    </Layout>
  )
}

export default ErrorPage
