import { memo } from 'react'
import { Typography } from '@material-ui/core'
import { RemoveRedEye } from '@material-ui/icons'
import Img from 'src/components/Img'
import { saturateOnHover } from 'utils/styles'
import theme from 'src/ui/theme'

const Testimonial = ({ onOpen, index, name, picture }) => {
  const onClick = event => {
    event.preventDefault()
    onOpen(index)
  }
  return (
    <a href="#" className="testimonial-item" onClick={onClick}>
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
          <Typography
            css={{ flex: 1 }}
            variant="subtitle1"
            color="textSecondary"
          >
            {name}
          </Typography>
          <RemoveRedEye css={{ color: theme.palette.text.secondary }} />
        </div>
      </figure>
    </a>
  )
}

export default memo(Testimonial)
