import React from 'react'
import { connect } from 'react-redux'

import './LanguageSwitcher.css'

import de from '../../i18n/de.json'
import en from '../../i18n/en.json'

import * as i18nActions from '../../actions/i18nActions'

class LanguageSwitcherComponent extends React.Component {

  languages = [
    { title: 'Deutsch', key: 'de' },
    { title: 'English', key: 'en' }
  ]

  translations = { de, en }

  constructor() {
    super()

    this.setLanguage.bind(this)

    const locale = window.navigator.language
    const language = locale.split('-')[0]

    if (this.translations[language]) {
      this.setLanguage(language)
    } else {
      this.setLanguage('en')
    }
  }

  setLanguage(language) {
    i18nActions.changeLanguage({
      language,
      translations: this.translations[language]
    })
  }

  render() {
    return (
      <div className="LanguageSwitcher">
        {this.languages.map(language =>
          <button type="button"
                  className={"LanguageSwitcher-button " +
                  (language.key === this.props.language ? 'active' : null)}
                  onClick={() => this.setLanguage(language.key)}
                  key={language.key}>
            {language.title}
          </button>)
        }
      </div>
    )
  }

}

export const LanguageSwitcher = connect(store => {
  return {
    language: store.i18n.language
  }
})(LanguageSwitcherComponent)