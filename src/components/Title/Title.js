import React from 'react'

import './Title.css'

export default class Title extends React.Component {

  render() {
    return (
      <h2 className="Title">{this.props.children} <i className="Title-icon material-icons">{this.props.icon}</i></h2>
    )
  }

}