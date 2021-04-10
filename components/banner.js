import { resolveLink } from 'lib/domain'

import CTAButton from 'components/cta-button'
import Img from 'components/img'

const Banner = ({ data: { image, title, subtitle, link, button_text } }) => (
  <div className="relative flex md:flex-row flex-col min-h-screen w-full">
    <Img
      className="max-h-screen md:w-7/12 lg:w-8/12 min-h-[70vh]"
      src={image.url}
      alt={title}
    />
    <div className="flex flex-col items-start md:items-stretch md:w-5/12 lg:w-4/12 bg-white md:border-l-8 border-gray-100 py-12 px-10 sm:px-12 justify-end text-black">
      <h3 className="text-3xl lg:text-4xl xl:text-5xl tracking-tighter font-bold">
        {title}
      </h3>
      {subtitle && <p className="mt-2 mb-4">{subtitle}</p>}
      <CTAButton href={resolveLink(link.url)}>{button_text}</CTAButton>
    </div>
  </div>
)

export default Banner
