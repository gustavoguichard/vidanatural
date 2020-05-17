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

export interface Post {
  uid: string
  first_publication_date: Date
  data: {
    title: string
    date?: Date
    body: any[]
    header_image?: object
    author: {
      id: string
    }
  }
}

export interface Member {
  id: string
  uid: string
  data: {
    name: any
  }
}

export interface PostBody {
  type: string
  text: string
  spans: object[]
}
