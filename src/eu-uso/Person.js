import { memo, useRef } from 'react'
import { Typography } from '@material-ui/core'
import { Link, RemoveRedEye } from '@material-ui/icons'
import Img from 'src/components/Img'
import VNLink from 'src/components/Link'
import theme from 'lib/theme'

export const saturateOnHover = (time = '.3s') => ({
  filter: 'saturate(0)',
  transition: `${time} filter`,
  '&:hover, a:focus & ': {
    filter: 'saturate(1)',
  },
})

const Testimonial = ({ onOpen, index, name, picture }) => {
  const linkRef = useRef()

  const onClick = (event) => {
    if (event.currentTarget.dataset.id === 'link') {
      event.stopPropagation()
    } else {
      event.preventDefault()
      onOpen(index)
    }
  }

  return (
    <VNLink
      href="/eu-uso/[name]"
      as={`/eu-uso/${picture}`}
      className="testimonial-item"
      onClick={onClick}
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
          <Typography
            css={{ flex: 1 }}
            variant="subtitle1"
            color="textSecondary"
          >
            {name}
          </Typography>
          <Link
            onClick={onClick}
            data-id="link"
            ref={linkRef}
            css={{ color: theme.palette.text.secondary, marginRight: 4 }}
          />
          <RemoveRedEye css={{ color: theme.palette.text.secondary }} />
        </div>
      </figure>
    </VNLink>
  )
}

export default memo(Testimonial)
