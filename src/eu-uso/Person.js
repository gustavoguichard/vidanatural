import { memo } from 'react'
import { useToggle } from 'utils/hooks'
import { saturateOnHover } from 'utils/styles'
import { Typography } from '@material-ui/core'
import { Info } from '@material-ui/icons'
import theme from 'src/ui/theme'

const Testimonial = ({ onOpen, index, src, name, picture, ...props }) => {
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
          marginBottom: -5,
          width: '100%',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          minHeight: 250,
          paddingRight: 1,
        }}
      >
        <img
          {...props}
          css={{ width: '100%', objectFix: 'cover' }}
          src={`/static/images/testimonials/${picture}.jpg`}
          alt={name}
        />
        <div
          css={{
            backgroundColor: 'rgba(0,0,0,.5)',
            bottom: 0,
            left: 0,
            padding: 10,
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
          <Info css={{ color: theme.palette.text.secondary }} />
        </div>
      </figure>
    </a>
  )
}

export default memo(Testimonial)