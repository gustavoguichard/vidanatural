import { memo } from 'react'

import Masonry from 'components/masonry'
import Person from 'components/person'

const People = ({ testimonials }) => {
  return (
    <div className="max-w-screen-xl m-auto px-10">
      <div
        className="sm:bg-gray-900 overflow-hidden sm:shadow-lg sm:rounded-lg -mt-20 -mb-4"
        css={{
          WebkitMaskImage:
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)',
        }}
      >
        <Masonry>
          {testimonials.map((testimonial, index) => (
            <Person key={index} {...testimonial} />
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default memo(People)
