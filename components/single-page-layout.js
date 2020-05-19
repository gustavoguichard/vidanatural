import { Container, Grid } from '@material-ui/core'

import theme from 'lib/theme'

import Layout from 'components/layout'

const SinglePageLayout = ({
  children,
  hero,
  containerProps = {},
  ...props
}) => {
  return (
    <Layout variant="secondary" css={{ background: 'white' }} {...props}>
      {hero}
      <Container
        maxWidth="lg"
        css={{
          padding: theme.spacing(hero ? 8 : 18, 3, 4),
          borderBottom: '10px solid white',
        }}
      >
        <Grid container justify="center">
          <Grid item xs={12} md={8} {...containerProps}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default SinglePageLayout