import { GoQuote } from 'react-icons/go'
import ReactMarkdown from 'react-markdown'
import { Avatar, Box, Paper, Typography } from '@material-ui/core'

import theme from 'lib/theme'

import Img from 'components/img'

const Testimonial = ({ name, role, picture, location, content }) =>
  name ? (
    <Paper
      css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: theme.spacing(4),
        paddingBottom: theme.spacing(2.5),
        marginBottom: theme.spacing(5),
        textAlign: 'left',
        textShadow: 'none',
      }}
    >
      <Typography
        css={{ color: theme.palette.primary.light, overflowY: 'auto' }}
        align="left"
        component="div"
        variant="body2"
      >
        <GoQuote css={{ position: 'absolute', fontSize: '0.8rem' }} />
        <ReactMarkdown
          escapeHtml={false}
          css={{
            '& p:first-of-type': { textIndent: '1.15rem' },
            '&::first-letter': {
              fontSize: '1.25rem',
            },
          }}
          source={content}
        />
      </Typography>
      <Box display="flex">
        <Box flex={1} mr={2}>
          <Typography
            variant="body2"
            css={{ lineHeight: 1.4, fontSize: '.85rem' }}
          >
            <strong>{name}</strong>
            <br />
            <span css={{ color: theme.palette.text.hint }}>
              {role}
              {role && <br />}
              {location}
            </span>
          </Typography>
        </Box>
        <Img
          Component={Avatar}
          css={{
            alignSelf: 'flex-end',
            border: '4px solid white',
            width: 80,
            right: -10,
            height: 80,
            marginBottom: -50,
          }}
          alt={name}
          src={`/static/images/testimonials/thumbs/${picture}.jpg`}
        />
      </Box>
    </Paper>
  ) : null

export default Testimonial