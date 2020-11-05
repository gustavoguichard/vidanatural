import { resolveLink } from 'lib/domain'

import Banner from 'components/banner'
import Carousel from 'components/carousel'

const HomeBanners = ({ banners }) => (
  <Carousel>
    {banners.map(({ data, id }, idx) => (
      <Banner
        key={id}
        src={data.image.url}
        title={data.title}
        alwaysShow={idx === 0}
        subtitle={data.subtitle}
        url={resolveLink(data.link.url)}
        cta={data.button_text}
      />
    ))}
  </Carousel>
)

export default HomeBanners
