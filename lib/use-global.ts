import uniqBy from 'lodash/uniqBy'
import createStore, { Store } from 'lib/create-store'

import { initialState } from 'lib/constants'

import type { Notification } from 'types/global-state'

export default createStore(
  {
    openSearch: (store: Store) => {
      store.setState({ searchOpen: true })
    },
    closeSearch: (store: Store) => {
      store.setState({ searchOpen: false })
    },
    notify: (store: Store, notification: Partial<Notification>) => {
      store.setState({
        notifications: uniqBy(
          [
            ...store.state.notifications,
            {
              type: 'info',
              id: new Date().getTime(),
              position: 'top-right',
              ...notification,
            },
          ],
          'id',
        ),
      })
    },
    dismissNotification: (store: Store, id: string | number) => {
      store.setState({
        notifications: store.state.notifications.filter(
          (n: Notification) => n.id !== id,
        ),
      })
    },
  },
  initialState,
)
