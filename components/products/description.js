import { FaAngleRight } from 'react-icons/fa'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'

import { useToggle } from 'lib/hooks'
import theme from 'lib/theme'

import LinearGradient from 'components/linear-gradient'

const Description = ({ product, isDesktop }) => {
  const [isOpen, toggle] = useToggle()
  return (
    <Container
      maxWidth="lg"
      id="descricao"
      css={{
        borderTop: '10px solid white',
        paddingBottom: theme.spacing(5),
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        ul: { padding: 0, listStylePosition: 'inside' },
      }}
    >
      <Grid
        css={{ color: theme.palette.text.hint }}
        className="MuiTypography-root MuiTypography-body1"
        container
        spacing={2}
        justify="center"
      >
        <Grid item xs={12} md={8}>
          <Typography variant="h3" css={{ marginBottom: theme.spacing(2) }}>
            Informações
          </Typography>
          <Typography
            variant="body1"
            component="div"
            css={{
              maxHeight: isOpen ? 'auto' : 300,
              transition: 'all .45s ease-in-out',
              overflow: 'hidden',
            }}
            dangerouslySetInnerHTML={{
              __html: product.description.information,
            }}
          />
          {isOpen ? null : (
            <>
              <LinearGradient
                deg={0}
                colors={['rgba(250,250,250,1)', 'rgba(250,250,250,0)']}
              >
                <Box
                  pt={10}
                  mt={-10}
                  mb={2}
                  position="relative"
                  zIndex={2}
                  css={{ pointerEvents: 'none' }}
                />
              </LinearGradient>
              <Button
                variant="text"
                color="secondary"
                onClick={(ev) => {
                  ev.preventDefault()
                  toggle()
                }}
              >
                Ler mais
                <FaAngleRight css={{ marginLeft: theme.spacing() }} />
              </Button>
            </>
          )}
        </Grid>
        {product.description.specifications && (
          <Grid item xs={12} md={4}>
            <hr
              css={{
                border: 'none',
                borderTop: `5px solid #d8d8d8`,
                marginBottom: theme.spacing(3),
                display: isDesktop ? 'none' : 'block',
              }}
            />
            <Typography variant="h3" css={{ marginBottom: theme.spacing(2) }}>
              Especificações
            </Typography>
            <Typography
              component="div"
              css={{ fontSize: '0.941rem', lineHeight: '1.6rem' }}
              dangerouslySetInnerHTML={{
                __html: product.description.specifications,
              }}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default Description
