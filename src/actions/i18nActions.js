import { store } from '../store'

export function changeLanguage({ language, translations }) {
  store.dispatch({
    type: 'CHANGE_LANGUAGE',
    payload: { language, translations }
  })
}