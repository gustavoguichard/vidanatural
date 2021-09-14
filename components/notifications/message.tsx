import React from 'react'
import { useToggle } from 'lib/hooks'
import useGlobal from 'lib/use-global'

import { Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import Countdown from 'components/countdown'

import type { Notification } from 'types/global-state'

type Props = { notification: Notification }
const Message = ({ notification }: Props) => {
  const { id, type, persist, message, title, htmlMessage } = notification
  const [visible, onFinish] = useToggle(true)
  const [, { dismissNotification }] = useGlobal()

  const dismiss = () => dismissNotification(id)

  return (
    <Transition
      show={visible}
      as={React.Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={dismiss}
    >
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
        {persist || <Countdown active time={6} onFinish={onFinish} />}
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {type === 'info' && (
                <InformationCircleIcon
                  className="w-6 h-6 text-blue-400"
                  aria-hidden="true"
                />
              )}
              {type === 'success' && (
                <CheckCircleIcon
                  className="w-6 h-6 text-green-400"
                  aria-hidden="true"
                />
              )}
              {type === 'alert' && (
                <ExclamationIcon
                  className="w-6 h-6 text-orange-400"
                  aria-hidden="true"
                />
              )}
              {type === 'error' && (
                <XCircleIcon
                  className="w-6 h-6 text-red-400"
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="flex flex-col ml-3 w-0 flex-1 pt-0.5 gap-1">
              {title && (
                <p className="text-sm font-medium text-gray-900">{title}</p>
              )}
              {htmlMessage ? (
                <div
                  className="text-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: htmlMessage }}
                />
              ) : (
                <p className="text-sm text-gray-500">{message}</p>
              )}
            </div>
            <div className="flex flex-shrink-0 ml-4">
              <button
                className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500"
                onClick={() => onFinish()}
              >
                <span className="sr-only">Fechar</span>
                <XIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default Message
