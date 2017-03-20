import React from 'react'

import './Signature.css'

export default class Signature extends React.Component {

  getDate() {
    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    return this.props.i18n.formatDate({
      day: day > 9 ? day.toString() : '0' + day,
      month: month > 9 ? month.toString() : '0' + month,
      year: year.toString()
    })
  }

  render() {
    return (
      <div className="Signature-container">
        <img className="Signature" alt="Signature" role="presentation" src={this.props.image} />
        <div className="Signature-text">{this.props.city}, {this.getDate()}</div>
      </div>
    )
  }

}