// import { useContext, useEffect } from 'react'
// import { useInView } from 'react-intersection-observer'
import { Box, Container, Typography } from '@material-ui/core'
import NextLink from 'next/link'
import theme from 'src/ui/theme'
import Link from 'src/components/Link'
import SocialList from 'src/components/SocialList'
// import { usePrevious } from 'utils/hooks'
// import { useIsMobile } from 'utils/responsive'
// import { Context } from 'utils/CustomerChat'
import sloganImg from 'static/images/slogan.svg'

const Slogan = ({ secondary }) => (
  <NextLink href="/eu-uso-cosmetica-consciente">
    <a title="Ir para a homepage">
      <img
        css={{
          width: 150,
          margin: theme.spacing(),
          transition: 'all .3s',
          filter: secondary ? 'invert(0.95)' : null,
        }}
        src={sloganImg}
        alt="Vida Natural"
      />
    </a>
  </NextLink>
)

const date = new Date()

const Footer = ({ variant = 'secondary' }) => {
  const secondary = variant === 'secondary'
  // const chat = useContext(Context)
  // const isMobile = useIsMobile()
  // const [ref, visible] = useInView({
  //   threshold: 0,
  //   triggerOnce: true,
  // })
  // const wasVisible = usePrevious(visible)
  // useEffect(() => {
  //   !isMobile && wasVisible === false && visible && chat.initConversation()
  // }, [visible])
  return (
    <Box
      id="contato"
      pb={2}
      pt={5}
      bgcolor={secondary ? 'primary.dark' : 'background.default'}
    >
      <Container
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          [theme.breakpoints.down('xs')]: { justifyContent: 'center' },
        }}
      >
        <Slogan secondary={secondary} />
        <SocialList color="white" />
        <Box flex={1} ml={2} css={{ minWidth: '60%' }}>
          <Typography variant="body2" color="textSecondary">
            {date.getFullYear()} Vida Natural&reg; • Imbituba / SC
            <br />
            <Link href="mailto:falecom@vidanatural.eco.br">
              falecom@vidanatural.eco.br
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
