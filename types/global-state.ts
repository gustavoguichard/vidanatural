type VPos = 'top' | 'bottom'
type HPos = 'left' | 'right'
type Notification = {
  id: string | number
  type: 'info' | 'alert' | 'error' | 'success'
  persist?: boolean
  title?: string
  message?: string
  htmlMessage?: string
  position?: `${VPos}-${HPos}`
}

type State = {
  cart: any[]
  showCart: boolean
  updatingCard: boolean
  subscribed: boolean
  freeShippingPrice: number
  updatingCart: boolean
  searchOpen: boolean
  notifications: Notification[]
}

export type { Notification, State }
