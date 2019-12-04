import { Box } from '@material-ui/core'
import CTAButton from 'src/components/CTAButton'
import LinearGradient from 'src/components/LinearGradient'
import PaperContent from 'src/ui/PaperContent'
import { useToggle } from 'utils/hooks'
import theme from 'src/ui/theme'

const Description = ({ product }) => {
  const [isOpen, toggle] = useToggle()
  return (
    <PaperContent overlap={false}>
      <Box
        id="descricao"
        css={{
          maxHeight: isOpen ? 'auto' : 300,
          transition: 'all .45s ease-in-out',
          overflow: 'hidden',
        }}
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
      {isOpen || (
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
    </PaperContent>
  )
}

export default Description
