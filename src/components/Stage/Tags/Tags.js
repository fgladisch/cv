import React from 'react';

import './Tags.css';

export default class Tags extends React.Component {

  generateTagElement(name) {
    return <div className="tag" key={name}>{name}</div>;
  }

  render() {
    return (
      <div className="tag-container">
        {this.props.values.map(this.generateTagElement)}
      </div>
    );
  }

}
