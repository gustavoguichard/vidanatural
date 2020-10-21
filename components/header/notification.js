import useGlobal from 'lib/use-global'

const Notification = () => {
  const [{ notification }, actions] = useGlobal()
  return notification ? (
    <div className="flex items-center justify-center bg-yellow-100 relative text-yellow-900 lg:px-8 px-6 py-2 text-center">
      <span dangerouslySetInnerHTML={{ __html: notification }} />
      <button
        type="button"
        title="Fechar"
        onClick={actions.dismissNotification}
        className="font-bold text-lg absolute right-0 mr-2"
      >
        &times;
      </button>
    </div>
  ) : null
}

export default Notification
