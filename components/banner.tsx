import Img from 'components/img'
import { HomeBanner } from 'types/cms'
import Link from 'components/link'

const Banner = ({ data: { image, title, subtitle, link } }: HomeBanner) => {
  return (
    <Link
      href={link.url}
      className="relative px-6 py-32 bg-gray-800 sm:py-40 sm:px-12 lg:px-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Img
          src={image.url}
          alt={title}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900/50" />
      <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-xl text-white">{subtitle}</p>
      </div>
    </Link>
  )
}

export default Banner
