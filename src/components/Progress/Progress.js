import React from 'react'

import './Progress.css'

export default class Progress extends React.Component {

  state = {
    progressStyle: { width: '0%' }
  }

  constructor() {
    super()
    setTimeout(() => {
      this.setState({ progressStyle: { width: this.props.percent + '%' } })
    }, 500)
  }

  render() {
    return (
      <div className="Progress-container">
        <span className="Progress-label">{this.props.children}</span>
        <div className="Progress-bar">
          <div className="Progress" style={this.state.progressStyle}></div>
        </div>
      </div>
    )
  }

}
