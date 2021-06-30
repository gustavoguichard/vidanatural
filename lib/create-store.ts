import { useState, useEffect } from 'react'
import forEach from 'lodash/forEach'

import type { Store, GlobalState, Listener, Actions } from 'types/global-state'

function setState(this: Store, newState: GlobalState, updateContext?: string) {
  this.state = { ...this.state, ...newState }
  if (this.listeners) {
    this.listeners.forEach(([context, listener]: Listener) => {
      if (updateContext === context) listener(this.state)
    })
  }
}

function useCustom(this: Store, context?: string): [GlobalState, Actions] {
  const [, newListener] = useState()
  useEffect(() => {
    if (this.listeners) this.listeners.push([context, newListener])
    return () => {
      this.listeners = this.listeners
        ? this.listeners.filter(
            ([, listener]: Listener) => listener !== newListener,
          )
        : []
    }
  }, [newListener, context])
  return [this.state, this.actions!]
}

function associateActions(store: Store, actions: Actions) {
  const associatedActions: Actions = {}
  forEach(actions, (value, key) => {
    if (typeof value === 'function') {
      associatedActions[key] = value.bind(null, store)
    }
    if (typeof value === 'object') {
      associatedActions[key] = associateActions(store, value)
    }
  })
  return associatedActions
}

const createStore = (actions: Actions, initialState: GlobalState = {}) => {
  if (!actions) {
    throw new Error('You need to set up some actions')
  }
  const store: Store = {
    state: initialState,
    listeners: [],
    setState: () => null,
  }
  store.setState = setState.bind(store)
  store.actions = associateActions(store, actions)
  return useCustom.bind(store)
}

export default createStore
