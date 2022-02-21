import { useState } from 'react'
import Script from 'next/script'
import { useFormState } from 'react-use-form-state'

import useGlobal from 'lib/use-global'
import api from 'lib/api'
import { cx } from 'lib/utils'
import analytics from 'lib/analytics'

import MailIcon from '@heroicons/react/outline/MailIcon'

import EcommerceLayout from 'layouts/ecommerce'
import SEO from 'components/seo'
import { WhatsappIcon } from 'components/svg/whatsapp'

declare let window: Window & { grecaptcha: any }
type FormFields = {
  key: string
  a_password: string
  reply_to: string
  name: string
  email: string
  phone?: string
  message: string
}
const ContactPage = () => {
  const [sending, setSending] = useState(false)
  const [, { notify }] = useGlobal()

  const [formState, { raw, text, email, textarea }] = useFormState<FormFields>({
    key: 'vidanatural-nova-mensagem-pelo-site-da-vn',
    reply_to: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSending(true)
    if (typeof window.grecaptcha !== 'undefined') {
      window.grecaptcha.enterprise.ready(async () => {
        await window.grecaptcha.enterprise.execute(
          process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA,
          { action: 'Contact' },
        )
        const values = { ...formState.values, reply_to: formState.values.email }
        analytics.track('Contact', { location: 'ContactForm', values })
        if (await api.vnda.endpoints.sendForm(values)) {
          notify({
            type: 'success',
            position: 'top-right',
            title: 'Agradecemos pelo contato!',
            message: 'Retornaremos assim que possível.',
          })
        } else {
          notify({
            type: 'error',
            position: 'top-right',
            title: 'Não foi possível enviar a mensagem',
            message:
              'Certifique-se que as informações estão corretas e tente novamente mais tarde',
          })
        }
      })
    }
    setSending(false)
  }
  return (
    <>
      <SEO title="Entre em contato" />
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA}`}
        strategy="lazyOnload"
      />
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Entre em contato
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Estamos abertos a ouvir qualquer sugestão, reclamação ou um
                oizinho. Nós retornaremos o contato assim que possível.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Endereço</dt>
                  <dd>
                    <p>Antolino E. Martins, 106</p>
                    <p>Vila Esperança, Imbituba / SC</p>
                    <p>88780-000</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Telefone</dt>
                  <dd className="flex">
                    <a
                      className="shrink-0 text-emerald-400 hover:text-emerald-500"
                      href="https://wa.me/5548991039557"
                      title="Enviar mensagem de whatsapp"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <WhatsappIcon className="w-5 h-5 " />
                    </a>
                    <span className="ml-3">+55 (48) 99103-0557</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">E-mail</dt>
                  <dd className="flex">
                    <MailIcon
                      className="shrink-0 w-6 h-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">falecom@vidanatural.eco.br</span>
                  </dd>
                </div>
                <div className="mt-6 text-sm">
                  <dt className="sr-only">Informações da Empresa</dt>
                  <dd>
                    <p>Vida Natural Cosmética Consciente LTDA</p>
                    <p>CNPJ: 24.288.982/0001-27</p>
                    <p>Responsável Técnico CRQ 1330293</p>
                    <p>Res ANVISA Nº 343/05</p>
                    <p>AFE Nº 4.00.537-0</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                name="Contato"
                onSubmit={handleSubmit}
                action="/webform"
                method="POST"
                className={cx(
                  'grid grid-cols-1 gap-y-6',
                  sending && 'opacity-50',
                )}
                data-webform="vidanatural-nova-mensagem-pelo-site-da-vn"
              >
                <input {...raw('key')} type="hidden" />
                <input {...raw('reply_to')} type="hidden" />
                <input
                  {...text('a_password')}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="false"
                />
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Nome
                  </label>
                  <input
                    {...text('name')}
                    id="full-name"
                    autoComplete="name"
                    className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    E-mail
                  </label>
                  <input
                    {...email('email')}
                    id="email"
                    autoComplete="email"
                    className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Seu e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Telefone / Whatsapp
                  </label>
                  <input
                    {...text('phone')}
                    id="phone"
                    autoComplete="tel"
                    className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Seu telefone / whatsapp"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Mensagem
                  </label>
                  <textarea
                    {...textarea('message')}
                    id="message"
                    rows={4}
                    className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Sua mensagem"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-500 hover:bg-primary-600"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-300">
        <div className="max-w-md px-4 py-16 mx-auto text-center sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block text-primary-900/80">
              Quer revender nossos produtos?
            </span>
            <span className="block text-primary-900">Fale conosco.</span>
          </h2>
          <a
            href="https://wa.me/5548991039557"
            title="Enviar mensagem de whatsapp"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium bg-white border border-transparent rounded-md shadow-md text-grape-600 hover:bg-grape-50 sm:w-auto"
          >
            <span>Entrar em contato</span>
            <WhatsappIcon
              className="shrink-0 w-5 h-5 ml-3 text-emerald-400"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </>
  )
}

ContactPage.getLayout = EcommerceLayout
export default ContactPage
