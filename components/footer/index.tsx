import { LockClosedIcon } from '@heroicons/react/outline'
import NewsForm from 'components/footer/news-form'
import Link from 'components/link'
import { FacebookIcon } from 'components/svg/facebook'
import { InstagramIcon } from 'components/svg/instagram'
import { AmexIcon } from 'components/svg/payments/amex'
import { BoletoIcon } from 'components/svg/payments/boleto'
import { DinnersIcon } from 'components/svg/payments/dinners'
import { EloIcon } from 'components/svg/payments/elo'
import { HipercardIcon } from 'components/svg/payments/hipercard'
import { MastercardIcon } from 'components/svg/payments/master'
import { PixIcon } from 'components/svg/payments/pix'
import { VisaIcon } from 'components/svg/payments/visa'

const navigation = {
  products: [
    { name: 'Kits', href: '/produtos?filter=kit' },
    { name: 'Desodorantes', href: '/produtos?filter=desodorante' },
    { name: 'Hidratantes', href: '/produtos?filter=hidratante' },
    { name: 'Higiene', href: '/produtos?filter=higiene' },
  ],
  support: [
    { name: 'Nossos ingredientes', href: '/sobre-a-vida-natural#ingredientes' },
    { name: 'Dúvidas frequentes', href: '/faq' },
    { name: 'Contato', href: '/entre-em-contato' },
  ],
  company: [
    { name: 'Sobre a VN', href: '/sobre-a-vida-natural' },
    { name: 'Blog', href: '/blog' },
    { name: 'Quem somos?', href: '/sobre-a-vida-natural#quem-somos' },
    { name: 'Depoimentos', href: '/eu-uso-cosmetica-consciente' },
  ],
  legal: [
    {
      name: 'Política de Frete Grátis',
      href: '/faq/quais-sao-as-politicas-de-frete-gratis-do-e-commerce-da-vida-natural',
    },
    { name: 'Trocas e devoluções', href: '/termos-e-condicoes' },
    { name: 'Privacidade', href: '/termos-e-condicoes' },
  ],
  social: [
    {
      name: 'Ir para nosso Facebook',
      href: 'http://facebook.com/vidanatural.eco',
      icon: FacebookIcon,
    },
    {
      name: 'Ir para nosso Instagram',
      href: 'https://instagram.com/vidanatural.eco',
      icon: InstagramIcon,
    },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Produtos
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Suporte
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  A Empresa
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Regulamentos
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Quer descontos exclusivos?
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Assine nossa newsletter e receba ofertas no seu e-mail.
            </p>
            <NewsForm />
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            Vida Natural® {new Date().getFullYear()}{' '}
            <span aria-hidden="true">&middot;</span> Imbituba / SC
            <br />
            <a
              href="mailto:falecom@vidanatural.eco.br"
              className="text-gray-300 hover:text-white"
            >
              falecom@vidanatural.eco.br
            </a>{' '}
            <span aria-hidden="true">&middot;</span> CNPJ: 24.288.982/0001-27
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between px-4 py-2 bg-gray-100 sm:flex-row sm:px-6">
        <p className="flex items-center gap-2 text-sm">
          <LockClosedIcon className="inline-block w-4 h-4" /> Compra segura
        </p>
        <div className="flex items-center gap-2">
          <span title="Pix">
            <PixIcon className="w-6 h-6" />
          </span>
          <span title="Boleto">
            <BoletoIcon className="w-6 h-6" />
          </span>
          <span title="Visa">
            <VisaIcon className="w-8 h-8" />
          </span>
          <span title="MasterCard">
            <MastercardIcon className="w-8 h-8" />
          </span>
          <span title="Dinners">
            <DinnersIcon className="w-8 h-8" />
          </span>
          <span title="Elo">
            <EloIcon className="w-8 h-8" />
          </span>
          <span title="American Express">
            <AmexIcon className="w-8 h-8" />
          </span>
          <span title="Hipercard">
            <HipercardIcon className="w-8 h-8" />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
