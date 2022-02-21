import { cx } from 'lib/utils'
import { useNewsletterService } from 'lib/domain-hooks'

const NewsForm = () => {
  const { handleSubmit, emailField, sending } = useNewsletterService()

  return (
    <form
      className={cx(
        'mt-4 sm:flex sm:max-w-md',
        sending && 'opacity-50 pointer-events-none',
      )}
      name="Newsletter"
      onSubmit={handleSubmit}
      action="/webform"
    >
      <label htmlFor="email-address" className="sr-only">
        E-mail
      </label>
      <input
        {...emailField('email')}
        autoComplete="email"
        required
        className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md appearance-none"
        placeholder="Digite seu e-mail"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:shrink-0">
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-secondary-500 hover:bg-secondary-600"
        >
          Inscrever-se
        </button>
      </div>
    </form>
  )
}

export default NewsForm
