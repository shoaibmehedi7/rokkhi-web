import React, { Component } from 'react'

export class View extends Component {
  render() {
    return (
      <div>
        <h1>this is demo{this.props.text}</h1>
      </div>
    )
  }
}

export default View
