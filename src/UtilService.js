import { store } from './store'

export default class UtilService {

  static formatDate(date) {
    const language = store.getState().i18n.language;
    switch (language) {
      case 'de':
        return `${date.day}.${date.month}.${date.year}`
      default:
        return `${date.day}/${date.month}/${date.year}`
    }
  }

}