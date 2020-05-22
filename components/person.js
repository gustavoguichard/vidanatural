import { memo } from 'react'
import { Typography } from '@material-ui/core'
import { RemoveRedEye } from '@material-ui/icons'

import theme from 'lib/theme'

import Img from 'components/img'
import Link from 'components/link'

export const saturateOnHover = (time = '.3s') => ({
  filter: 'saturate(0)',
  transition: `${time} filter`,
  '&:hover, a:focus & ': {
    filter: 'saturate(1)',
  },
})

const Testimonial = ({ name, picture }) => (
  <Link
    href="/eu-uso/[name]"
    as={`/eu-uso/${picture}`}
    className="testimonial-item"
  >
    <figure
      css={{
        ...saturateOnHover(),
        cursor: 'pointer',
        margin: 0,
        marginBottom: 1,
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        minHeight: 250,
        paddingRight: 1,
      }}
    >
      <Img
        css={{ width: '100%', objectFit: 'cover' }}
        src={`/static/images/testimonials/${picture}.jpg`}
        alt={name}
      />
      <div
        css={{
          backgroundColor: 'rgba(0,0,0,.5)',
          bottom: 0,
          left: 0,
          padding: 12,
          display: 'flex',
          position: 'absolute',
          right: 0,
        }}
      >
        <Typography css={{ flex: 1 }} variant="subtitle1" color="textSecondary">
          {name}
        </Typography>
        <RemoveRedEye css={{ color: theme.palette.text.secondary }} />
      </div>
    </figure>
  </Link>
)

export default memo(Testimonial)
