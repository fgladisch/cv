import de from './i18n/de.json'
import en from './i18n/en.json'

import * as i18nActions from './actions/i18nActions'

export default class i18nService {

  currentLanguage
  languages = [
    { title: 'Deutsch', key: 'de' },
    { title: 'English', key: 'en' }
  ]
  translations = { de, en }

  constructor() {
    const locale = window.navigator.language
    const language = locale.split('-')[0]

    this.currentLanguage = language

    if (this.translations[language]) {
      this.setLanguage(language)
    } else {
      this.setLanguage('en')
    }
  }

  setLanguage(key) {
    this.currentLanguage = key
    i18nActions.updateTranslations(this.translations[key])
  }

  formatDate(date) {
    switch (this.currentLanguage) {
      case 'de':
        return `${date.day}.${date.month}.${date.year}`
      default:
        return `${date.day}/${date.month}/${date.year}`
    }
  }

}