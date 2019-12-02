import products from 'data/products'

export default {
  links: [
    {
      name: 'Produtos',
      links: [
        {
          name: 'Todos os produtos',
          path: '/produtos',
        },
        ...products.map(product => ({
          ...product,
          path: `/${product.slug || product.path}`,
        })),
      ],
    },
    {
      name: 'Onde encontrar?',
      path: '/onde-encontrar',
    },
    {
      name: 'Eu Uso!',
      path: '/eu-uso-cosmetica-consciente',
    },
    {
      name: 'Sobre',
      path: '/sobre-a-vida-natural',
      links: [
        {
          name: 'A Vida Natural',
          path: '/sobre-a-vida-natural',
        },
        {
          name: 'Quem somos?',
          path: '/sobre-a-vida-natural#quem-somos',
        },
        {
          name: 'Nossos ingredientes',
          path: '/#ingredientes',
        },
        {
          name: 'Termos e Condições',
          path: '/termos-e-condicoes',
        },
      ],
    },
    {
      name: 'Contato',
      path: '/entre-em-contato',
    },
  ],
}
