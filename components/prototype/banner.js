const Banner = ({ data: { image, title, subtitle, link, button_text } }) => {
  return (
    <div className="relative px-6 py-32 bg-gray-800 sm:py-40 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.url}
          alt={title}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-xl text-white">{subtitle}</p>
        <a
          href={link}
          className="block px-8 py-3 mt-8 text-base font-medium text-white border-2 border-white rounded-md border-opacity-20 bg-salmon-600 hover:bg-salmon-700 sm:w-auto"
        >
          Comprar produtos
        </a>
      </div>
    </div>
  )
}

export default Banner
