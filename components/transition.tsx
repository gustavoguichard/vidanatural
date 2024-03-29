import { Transition as HUITransition } from '@headlessui/react'

import type { TransitionClasses } from '@headlessui/react'

interface IProps extends TransitionClasses {
  children?: React.ReactNode
  appear?: boolean
  during?: string
  hidden?: string
  shown?: string
  show: boolean
  afterLeave?: () => void
  className?: string
}

function Transition({ during, hidden, shown, ...props }: IProps) {
  return (
    <HUITransition
      {...props}
      enter={during || props.enter}
      enterFrom={hidden || props.enterFrom}
      enterTo={shown || props.enterTo}
      leave={during || props.leave}
      leaveFrom={shown || props.leaveFrom}
      leaveTo={hidden || props.leaveTo}
    />
  )
}

function TransitionChild({ during, hidden, shown, ...props }: IProps) {
  return (
    <HUITransition.Child
      {...props}
      enter={during || props.enter}
      enterFrom={hidden || props.enterFrom}
      enterTo={shown || props.enterTo}
      leave={during || props.leave}
      leaveFrom={shown || props.leaveFrom}
      leaveTo={hidden || props.leaveTo}
    />
  )
}

Transition.Root = Transition
Transition.Child = TransitionChild

export default Transition
