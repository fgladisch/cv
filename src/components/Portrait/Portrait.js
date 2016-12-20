import React from 'react'

import './Portrait.css'

export default class Portrait extends React.Component {

  render() {
    return (
      <img role="presentation" className="portrait" src={this.props.image} />
    )
  }

}