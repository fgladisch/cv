import React from 'react'

import './Signature.css'

export default class Signature extends React.Component {

  getDate() {
    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    return `${day}.${month}.${year}`
  }

  render() {
    return (
      <div className="signature-container">
        <img className="signature" role="presentation" src={this.props.image} />
        <div className="signature-text">{this.props.city}, {this.getDate()}</div>
      </div>
    )
  }

}