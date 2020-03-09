const title = 'Vida Natural | Cosmética Consciente'
const description =
  'Produzimos desodorantes, shampoos, óleos hidratantes e pó dental elaborados em um processo de produção totalmente artesanal, 100% feitos à mão e em pequenos lotes, o que garante a entrega de cosméticos únicos, frescos, eficientes e em total equilíbrio com o seu corpo e o meio ambiente.'

export const titleTemplate = `%s | ${title}`

export default {
  title,
  description,
  openGraph: {
    description,
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vidanatural.eco.br/',
    site_name: title,
    images: [
      {
        url: 'https://www.vidanatural.eco.br/static/logo_bg.jpg',
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
