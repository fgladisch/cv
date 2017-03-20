import React from 'react'

import './LanguageSwitcher.css'

export default class LanguageSwitcher extends React.Component {

  constructor() {
    super()
    this.setLanguage.bind(this)
  }

  setLanguage(key) {
    this.props.i18n.setLanguage(key)
  }

  render() {
    return (
      <div className="LanguageSwitcher">
        {this.props.i18n.languages.map(language =>
          <button type="button"
                  className={"LanguageSwitcher-button " +
                  (language.key === this.props.i18n.currentLanguage ? 'active' : null)}
                  onClick={() => this.setLanguage(language.key)}
                  key={language.key}>
            {language.title}
          </button>)
        }
      </div>
    )
  }

}