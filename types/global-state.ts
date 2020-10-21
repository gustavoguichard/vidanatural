export interface GlobalState {
  [key: string]: any
}

export interface Action {
  (...args: any[]): any
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
