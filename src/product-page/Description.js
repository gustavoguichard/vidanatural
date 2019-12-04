import { Box, Container, Grid, Typography } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import LinearGradient from 'src/components/LinearGradient'
import PaperContent from 'src/ui/PaperContent'
import { useToggle } from 'utils/hooks'
import theme from 'src/ui/theme'

const Description = ({ product, isDesktop }) => {
  const [isOpen, toggle] = useToggle()
  return (
    <PaperContent
      noPadding
      paperCss={{
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(4),
      }}
      overlap={false}
    >
      <Container css={{ ul: { padding: 0, listStylePosition: 'inside' } }}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" css={{ marginBottom: theme.spacing(2) }}>
              Informações
            </Typography>
            <Typography
              variant="body1"
              component="div"
              id="descricao"
              css={{
                maxHeight: isOpen ? 'auto' : 300,
                transition: 'all .45s ease-in-out',
                overflow: 'hidden',
              }}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            {isOpen ? null : (
              <>
                <LinearGradient
                  deg={0}
                  colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
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
                <CTAButton
                  center={false}
                  href="#"
                  onClick={ev => {
                    ev.preventDefault()
                    toggle()
                  }}
                >
                  Ler mais
                </CTAButton>
              </>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <hr
              css={{
                marginBottom: theme.spacing(3),
                display: isDesktop ? 'none' : 'block',
              }}
            />
            <Typography variant="h4" css={{ marginBottom: theme.spacing(2) }}>
              Especificações
            </Typography>
            {product.characteristics.map((char, i) => (
              <Typography key={`char-${i}`} variant="body2">
                <strong>{char[0]}:</strong> {char[1]}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </PaperContent>
  )
}

export default Description
