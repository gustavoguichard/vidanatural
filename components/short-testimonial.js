import { GoQuote } from 'react-icons/go'
import { RichText } from 'prismic-reactjs'
import { Avatar, Box, Typography } from '@material-ui/core'

import theme from 'lib/theme'
import { isEmptyBody } from 'lib/domain'

import Img from 'components/img'
import Link from 'components/link'

const ShortTestimonial = ({ data, uid }) => {
  const { name, picture, short_content, content } = data
  return (
    <Box
      css={{
        padding: `${theme.spacing(4)}px ${theme.spacing(5)}px`,
        textAlign: 'center',
      }}
    >
      <Link
        href="/eu-uso/[name]"
        as={`/eu-uso/${uid}`}
        title="Ver depoimento completo"
      >
        <Img
          Component={Avatar}
          circle
          height={130}
          width={130}
          css={{
            width: 130,
            height: 130,
            margin: 'auto',
            marginBottom: theme.spacing(2),
          }}
          alt={name}
          src={picture.url}
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
        <GoQuote
          css={{ fontSize: '1.2rem', position: 'relative', bottom: -5 }}
        />
        <RichText
          render={isEmptyBody(short_content) ? content : short_content}
        />
      </Typography>
    </Box>
  )
}

export default ShortTestimonial
