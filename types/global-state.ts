import React from 'react'

export interface GlobalState {
  [key: string]: any
}

export interface Action {
  // eslint-disable-next-line no-unused-vars
  (...args: any[]): any
}

export interface Actions {
  [key: string]: Action | Actions
}

export type Listener = [string | undefined, React.Dispatch<any>]

export interface Store {
  setState: Function
  actions?: Actions
  state: GlobalState
  listeners?: Listener[]
}
