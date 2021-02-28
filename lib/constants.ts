export const BLOG_PAGE_SIZE = 10

// Global State Management
export const initialState = {
  cart: [],
  showCart: false,
  updatingCart: false,
  searchOpen: false,
  notifications: [
    {
      id: 1,
      htmlMessage: `<span class="text-center w-full">Frete grátis para todo o Brasil a partir de R$ 160,00.</span>`,
      type: 'black',
      center: true,
      persist: true,
      hideIcon: true,
    },
  ],
  freeShippingPrice: 160,
}

// SEO Texts
export const SITE_TITLE = 'Vida Natural | Cosmética Consciente'
export const META_DESCRIPTION =
  'Produzimos desodorantes, shampoos, óleos hidratantes e pó dental elaborados em um processo de produção totalmente artesanal, 100% feitos à mão e em pequenos lotes, o que garante a entrega de cosméticos únicos, frescos, eficientes e em total equilíbrio com o seu corpo e o meio ambiente.'
export const BLOG_DESCRIPTION =
  'Leia aqui artigos sobre cosmética natural, produtos orgânicos, veganos, artesanais e DIY (faça você mesmo).'
