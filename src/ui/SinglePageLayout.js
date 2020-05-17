import { Container, Grid } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import theme from 'src/ui/theme'

const SinglePageLayout = ({ children, containerProps = {}, ...props }) => {
  return (
    <Layout variant="secondary" {...props}>
      <Container
        maxWidth="lg"
        css={{
          padding: theme.spacing(18, 3, 4),
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
