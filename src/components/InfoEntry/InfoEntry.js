import React from 'react'

import './InfoEntry.css'

export default class InfoEntry extends React.Component {

  render() {
    return (
      <div className="InfoEntry">
        <i className="InfoEntry-icon material-icons">{this.props.icon}</i>{this.props.children}
      </div>
    )
  }

}