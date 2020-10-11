const FormError = ({
  message = 'Ocorreu um erro. Por favor, tente denovo mais tarde.',
  show,
}) =>
  show ? (
    <div className="bg-red-800 rounded p-3 text-white mb-2">{message}</div>
  ) : null

export default FormError
