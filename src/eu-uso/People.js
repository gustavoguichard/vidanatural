import { useState, useRef, memo, useEffect } from 'react'
import Masonry from 'src/components/Masonry'
import { useWindowDimensions } from 'utils/hooks'
import Person from 'src/eu-uso/Person'

const People = ({ children, onOpen, testimonials = [] }) => {
  const wrapper = useRef(null)
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const { width } = useWindowDimensions()
  useEffect(() => {
    if (wrapper.current) {
      setWrapperWidth(wrapper.current.getBoundingClientRect().width)
    }
  }, [width])
  const columns = wrapperWidth ? Math.round(wrapperWidth / 300) : 2

  return (
    <Masonry columns={columns} ref={wrapper}>
      {testimonials.map((testimonial, index) => (
        <Person onOpen={onOpen} index={index} key={index} {...testimonial} />
      ))}
    </Masonry>
  )
}

export default memo(People)
