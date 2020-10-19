import { resolveLink } from 'lib/domain'

import CTAButton from 'components/cta-button'
import Img from 'components/img'
import Carousel from 'components/carousel'

const HomeHero = ({ banners }) => (
  <Carousel>
    {banners.map(({ data, id }) => (
      <div className="relative flex md:flex-row flex-col min-h-screen" key={id}>
        <Img
          className="max-h-screen object-cover md:w-7/12 lg:w-8/12"
          src={data.image.url}
          alwaysShow
          css={{ minHeight: '70vh' }}
        />
        <div className="flex flex-col items-start md:items-stretch md:w-5/12 lg:w-4/12 bg-white md:border-l-8 border-gray-100 py-12 px-10 sm:px-12 justify-end text-black">
          <h3 className="text-3xl lg:text-4xl xl:text-5xl tracking-tighter font-bold leading-none">
            {data.title}
          </h3>
          {data.subtitle && <p className="mt-2 mb-4">{data.subtitle}</p>}
          <CTAButton href={resolveLink(data.link.url)}>
            {data.button_text || 'Comprar'}
          </CTAButton>
        </div>
      </div>
    ))}
  </Carousel>
)

export default HomeHero
