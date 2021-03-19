import { memo } from 'react'
import take from 'lodash/take'

import CTAButton from 'components/cta-button'
import Img from 'components/img'
import Testimonial from 'components/short-testimonial'

import sloganImg from 'public/static/svgs/slogan.svg'

const Testimonials = ({ testimonials: items, show = 3 }) => {
  const testimonials = take(items, show)
  return testimonials.length ? (
    <div className="py-16 border-b-8 border-white max-w-screen-xl mx-auto">
      <div className="mx-4 text-center">
        <Img
          className="max-w-full w-3/4 sm:w-1/2 md:w-4/12 lg:w-3/12 mx-auto mb-4"
          style={{ filter: 'brightness(0.2)' }}
          src={sloganImg}
          alt="Eu uso cosmética consciente"
        />
      </div>
      <div className="flex justify-center items-stretch flex-wrap">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.uid} {...testimonial} />
        ))}
      </div>
      <div className="text-center">
        <CTAButton href="/eu-uso-cosmetica-consciente">
          Mais depoimentos
        </CTAButton>
      </div>
    </div>
  ) : null
}

export default memo(Testimonials)
