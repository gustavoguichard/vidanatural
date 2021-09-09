import { RichText } from 'prismic-reactjs'

import { isEmptyBody } from 'lib/domain'

import Img from 'components/img'
import SloganSvg from 'components/svg/slogan'
import { Testimonial } from 'types/cms'

const HomeTestimonial = ({ data }: Testimonial) => {
  return (
    <section className="py-12 overflow-hidden bg-white md:py-20 lg:py-24">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative">
          <SloganSvg className="h-12 mx-auto" />
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-2xl font-medium leading-9 text-center text-gray-900">
              <RichText
                render={
                  isEmptyBody(data.short_content)
                    ? data.content
                    : data.short_content
                }
              />
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Img
                    className="w-10 h-10 mx-auto rounded-full"
                    src={data.picture['square'].url}
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    {data.name}
                  </div>

                  <svg
                    className="hidden w-5 h-5 mx-1 text-nature-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    {data.role}
                    {data.role && data.location && (
                      <span aria-hidden="true"> &middot; </span>
                    )}
                    {data.location}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonial
