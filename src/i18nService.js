import de from './i18n/de.json'
import en from './i18n/en.json'

export default class i18nService {

  currentLanguage
  translation
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
    this.translation = this.translations[key]
  }

  formatDate(date) {
    switch (this.currentLanguage) {
      case 'de':
        return `${date.day}.${date.month}.${date.year}`
      default:
        return `${date.year}-${date.month}-${date.day}`
    }
  }

}