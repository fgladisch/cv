import React from 'react'

import Tags from './Tags/Tags'

import './Stage.css'

export default class Stage extends React.Component {

  render() {
    return (
      <div className={"Stage "  + (this.props.isPrimary ? 'Stage-primary' : 'Stage-secondary')}>
        <div className="Stage-text-muted">{this.props.year}</div>
        <div className="Stage-text-primary">{this.props.name}</div>
        <div className="Stage-text-secondary">{this.props.description}</div>
        {this.props.tags ? <Tags values={this.props.tags} /> : null }
        {this.props.children}
      </div>
    )
  }

}
