import type { State } from 'types/global-state'

const initialState: State = {
  showCart: false,
  updatingCart: false,
  searchOpen: false,
  notifications: [],
  freeShippingPrice: 160,
  updatingCard: false,
}

// SEO Texts
const SITE_TITLE = 'Vida Natural | Cosmética Consciente'
const META_DESCRIPTION =
  'Produzimos desodorantes, shampoos, óleos hidratantes e pó dental elaborados em um processo de produção totalmente artesanal, 100% feitos à mão e em pequenos lotes, o que garante a entrega de cosméticos únicos, frescos, eficientes e em total equilíbrio com o seu corpo e o meio ambiente.'
const BLOG_DESCRIPTION =
  'Leia aqui artigos sobre cosmética natural, produtos orgânicos, veganos, artesanais e DIY (faça você mesmo).'

export { initialState, SITE_TITLE, META_DESCRIPTION, BLOG_DESCRIPTION }
