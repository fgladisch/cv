import { store } from '../store'

export function updateTranslations(translations) {
  store.dispatch({ type: 'UPDATE', payload: translations })
}