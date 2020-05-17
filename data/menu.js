import products from 'data/products'

const productLinks = products.map((product) => ({
  name: product.title,
  path: '/produtos/[slug]',
  as: `/produtos/${product.slug}`,
}))

export default {
  links: [
    {
      name: 'Produtos',
      links: [
        {
          name: 'Todos os produtos',
          path: '/produtos',
        },
        ...productLinks,
      ],
    },
    {
      name: 'Blog',
      path: '/blog',
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
          path: '/sobre-a-vida-natural#ingredientes',
        },
        {
          name: 'Perguntas frequentes',
          path: '/faq',
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
  footerLinks: [
    {
      name: 'Produtos',
      links: productLinks,
    },
    {
      name: 'Nós',
      links: [
        {
          name: 'Blog',
          path: '/blog',
        },
        {
          name: 'A Vida Natural',
          path: '/sobre-a-vida-natural',
        },
        {
          name: 'Quem somos?',
          path: '/sobre-a-vida-natural#quem-somos',
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
          name: 'Nossos ingredientes',
          path: '/sobre-a-vida-natural#ingredientes',
        },
        {
          name: 'Perguntas frequentes',
          path: '/faq',
        },
        {
          name: 'Termos e Condições',
          path: '/termos-e-condicoes',
        },
        {
          name: 'Contato',
          path: '/entre-em-contato',
        },
      ],
    },
  ],
}
