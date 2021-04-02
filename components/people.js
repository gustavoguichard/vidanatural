import Person from 'components/person'

const People = ({ testimonials }) => (
  <div className="max-w-screen-xl m-auto px-10 relative z-10">
    <div className="sm:bg-gray-900 overflow-hidden sm:shadow-lg rounded-lg -mt-20 -mb-4">
      <div className="people-masonry gap-px auto-rows-[150px] grid">
        {testimonials.map((testimonial, index) => (
          <Person key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </div>
)

export default People
