import React from 'react'

import './Title.css'

export default class Title extends React.Component {

  render() {
    return (
      <h2 className="title">{this.props.children} <i className="title-icon material-icons">{this.props.icon}</i></h2>
    )
  }

}