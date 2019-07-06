import { memo } from 'react'
import { useToggle } from 'utils/hooks'
import { saturateOnHover } from 'utils/styles'

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
          position: 'relative',
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
      </figure>
    </a>
  )
}

export default memo(Testimonial)
