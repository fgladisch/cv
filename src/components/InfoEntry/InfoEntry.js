import React from 'react'

import './InfoEntry.css'

export default class InfoEntry extends React.Component {

  render() {
    return (
      <div className="info-entry">
        <i className="info-entry-icon material-icons">{this.props.icon}</i>{this.props.children}
      </div>
    )
  }

}