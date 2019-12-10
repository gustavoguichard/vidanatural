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
  },
  twitter: {
    // handle: '@vidanatural.eco',
    // site: '@site',
    cardType: 'summary_large_image',
  },
}
