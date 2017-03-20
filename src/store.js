import { createStore } from 'redux'

import { reducers } from './reducers'

export const store = createStore(reducers, {
  i18n: {
    translations: {}
  }
})