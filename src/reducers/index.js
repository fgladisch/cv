import { combineReducers } from 'redux'

import { i18nReducer } from './i18nReducer';

export const reducers = combineReducers({
  i18n: i18nReducer
})
