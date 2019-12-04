import { Avatar, Box, Paper, Typography } from '@material-ui/core'
import { GoQuote } from 'react-icons/go'
import MdContent from 'src/components/MdContent'
import Img from 'src/components/Img'
import theme from 'src/ui/theme'

const ShortTestimonial = ({ name, picture, shortContent, content }) => (
  <Box
    css={{
      padding: theme.spacing(4),
      textAlign: 'center',
    }}
  >
    <Img
      Component={Avatar}
      height={130}
      width={130}
      css={{
        width: 130,
        height: 130,
        margin: 'auto',
        marginBottom: theme.spacing(2),
      }}
      alt={name}
      src={`/static/images/testimonials/thumbs/${picture}.jpg`}
    />
    <Typography variant="h4" css={{ margin: theme.spacing() }}>
      <strong>{name.split(' ')[0]}</strong>
    </Typography>
    <Typography
      css={{ color: theme.palette.text.hint }}
      align="center"
      component="div"
      variant="body1"
    >
      <GoQuote css={{ fontSize: '1.2rem', position: 'relative', bottom: -5 }} />
      <MdContent
        css={{
          textIndent: '1.15rem',
          a: {
            color: theme.palette.secondary.main,
          },
          '&::first-letter': {
            fontSize: '1.25rem',
          },
        }}
        content={shortContent || content}
      />
    </Typography>
  </Box>
)

export default ShortTestimonial
