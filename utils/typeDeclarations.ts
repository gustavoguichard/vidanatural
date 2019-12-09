export interface GlobalState {
  [key: string]: any
}

export interface Action {
  (t: Store, ...args: any[]): any
}

export interface Actions {
  [key: string]: Action | Actions
}

export type Listener = [string | undefined, React.Dispatch<any>]

export interface Store {
  setState: Function
  setGlobalState?: Function
  actions?: Actions
  state: GlobalState
  listeners?: Listener[]
}

export interface FormKeys {
  a_password?: string
  key: string
  [key: string]: string | undefined
}
