import {
  Transition as HUITransition,
  TransitionClasses,
} from '@headlessui/react'

interface IProps extends TransitionClasses {
  during?: string
  hidden?: string
  shown?: string
  show: boolean
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
