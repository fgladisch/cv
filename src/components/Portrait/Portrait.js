import React from 'react'

import './Portrait.css'

export default class Portrait extends React.Component {

  render() {
    return (
      <img role="presentation" alt="Portrait" className="Portrait" src={this.props.image} />
    )
  }

}