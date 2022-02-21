import { useNewsletterService } from 'lib/domain-hooks'

import Link from 'components/link'
import { cx } from 'lib/utils'

function NewsletterSection() {
  const { handleSubmit, sending, emailField } = useNewsletterService()
  return (
    <div className="bg-primary-800">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Receba novidades
          </h2>
          <p className="max-w-3xl mt-3 text-lg leading-6 text-gray-300">
            Assine nossa newsletter e receba nossas promoções em primeira mão.
            Não se preocupe, nós não enviamos muitos e-mails.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form onSubmit={handleSubmit} className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              E-mail
            </label>
            <input
              {...emailField('email')}
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 border border-transparent rounded-md sm:max-w-xs"
              placeholder="Digite seu e-mail"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:shrink-0">
              <button
                type="submit"
                disabled={sending}
                className={cx(
                  'flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-500 hover:bg-primary-600',
                  sending && 'opacity-50 pointer-events-none',
                )}
              >
                Inscrever-se
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-300">
            Nós respeitamos sua privacidade. Leia nossos{' '}
            <Link
              href="/termos-e-condicoes"
              className="font-medium text-white underline"
            >
              termos de privacidade.
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSection
