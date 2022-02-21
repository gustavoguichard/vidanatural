import Link from 'components/link'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

const IntroVideo = () => {
  return (
    <div className="bg-gray-50">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-secondary-500">
            Lila Ozorio, Fundadora
          </h2>
          <p className="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Feita por Humanos
          </p>
          <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
            Conheça um pouco da nossa missão.{' '}
            <Link
              href="/sobre-a-vida-natural"
              className="font-medium group text-secondary-500"
            >
              Saiba mais
              <span
                className="inline-block transition group-hover:translate-x-1"
                aria-hidden="true"
              >
                {' '}
                &rarr;
              </span>
            </Link>
          </p>
          <div className="max-w-3xl mx-auto mt-8 overflow-hidden rounded">
            <LiteYouTubeEmbed
              announce="Assistir"
              wrapperClass="yt-lite"
              poster="hqdefault"
              playlist={false}
              id="pboUElmO33s"
              title="Bem vinda a Vida Natural"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroVideo
