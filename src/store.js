import { createStore } from 'redux'

import { reducers } from './reducers'

export const store = createStore(reducers, {
  i18n: {
    translations: {}
  }
})

store.subscribe(() => {
  console.log('store changed', store.getState())
})