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
      <div className="progress-container">
        <span className="progress-label">{this.props.children}</span>
        <div className="progress-bar">
          <div className="progress" style={this.state.progressStyle}></div>
        </div>
      </div>
    )
  }

}
