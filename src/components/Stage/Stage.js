import React from 'react'

import Tags from './Tags/Tags'

import './Stage.css'

export default class Stage extends React.Component {

  render() {
    return (
      <div className={"stage "  + (this.props.isPrimary ? 'stage-primary' : 'stage-secondary')}>
        <div className="stage-text-muted">{this.props.year}</div>
        <div className="stage-text-primary">{this.props.name}</div>
        <div className="stage-text-secondary">{this.props.description}</div>
        {this.props.tags ? <Tags values={this.props.tags} /> : null }
        {this.props.children}
      </div>
    )
  }

}
