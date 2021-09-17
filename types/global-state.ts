import type { Cart } from 'types/vnda'

type NotificationAction = { label: string; onClick?: () => void }
type Notification = {
  id: string | number
  type: 'info' | 'alert' | 'error' | 'success'
  persist?: boolean
  title?: string
  message?: string
  htmlMessage?: string
  position: `${'top' | 'bottom'}-${'left' | 'right'}` | 'center'
  cancel?: NotificationAction
  action?: NotificationAction
  onClose?: () => void
}

type State = {
  cart: Cart
  showCart: boolean
  updatingCard: boolean
  freeShippingPrice: number
  updatingCart: boolean
  searchOpen: boolean
  notifications: Notification[]
}

export type { Notification, State }
