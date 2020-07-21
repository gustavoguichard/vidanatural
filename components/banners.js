import Link from 'next/link'

import { resolveLink } from 'lib/domain'
import { classes } from 'lib/utils'

import BackgroundImg from 'components/background-img'
import Carousel from 'components/carousel'

const MATCH_Y = { top: 'flex-start', bottom: 'flex-end', center: 'center' }
const MATCH_X = { left: 'flex-start', right: 'flex-end', center: 'center' }

const HomeHero = ({ banners }) => {
  return (
    <Carousel>
      {banners.map(({ data, id }) => {
        const cx = classes(
          'w-full max-w-md p-4 z-10 text-black',
          'shadow-xl bg-white bg-opacity-50 border-2 border-black',
          {
            'text-left': data.horizontal !== 'center',
            'text-center': data.horizontal === 'center',
          },
        )
        return (
          <div
            className="relative flex flex-col pb-10 pt-32 px-8 min-h-screen"
            key={id}
            style={{
              justifyContent: MATCH_Y[data.vertical],
              alignItems: MATCH_X[data.horizontal],
            }}
          >
            <BackgroundImg src={data.image.url} alwaysShow />
            <div className={cx}>
              <h3 className="text-3xl font-bold leading-tight">{data.title}</h3>
              {data.subtitle && (
                <p className="my-4 text-lg font-semibold">{data.subtitle}</p>
              )}
              <Link href={resolveLink(data.link.url)}>
                <a className="py-2 px-3 inline-block border-2 font-semibold uppercase border-black hover:border-green-600 hover:no-underline focus:border-green-600 transition duration-300">
                  {data.button_text || 'Comprar'}
                </a>
              </Link>
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default HomeHero
