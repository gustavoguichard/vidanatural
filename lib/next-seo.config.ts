import { SITE_TITLE, META_DESCRIPTION } from 'lib/constants'

export const titleTemplate = `%s | ${SITE_TITLE}`

const config = {
  title: SITE_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    description: META_DESCRIPTION,
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vidanatural.eco.br/',
    site_name: SITE_TITLE,
    images: [
      {
        url: 'https://www.vidanatural.eco.br/logo_bg.jpg',
        width: 1000,
        height: 839,
        alt: 'Vida Natural',
      },
    ],
  },
  twitter: {
    // handle: '@vidanatural.eco',
    // site: '@site',
    cardType: 'summary_large_image',
  },
}

export default config
