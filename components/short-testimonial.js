import { GoQuote } from 'react-icons/go'
import ReactMarkdown from 'react-markdown'
import { Avatar, Box, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Img from 'components/img'
import Link from 'components/link'

const ShortTestimonial = ({ name, picture, shortContent, content }) => (
  <Box
    css={{
      padding: `${theme.spacing(4)}px ${theme.spacing(5)}px`,
      textAlign: 'center',
    }}
  >
    <Link href="/eu-uso/[name]" as={`/eu-uso/${picture}`}>
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
    </Link>
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
      <ReactMarkdown escapeHtml={false} source={shortContent || content} />
    </Typography>
  </Box>
)

export default ShortTestimonial
