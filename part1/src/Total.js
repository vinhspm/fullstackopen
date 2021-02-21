import React, { Component } from 'react'

class Total extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>Number of exercises {this.props.exercises1 + this.props.exercises2 + this.props.exercises3}</p> 
      </div>
    );
  }
}

export default Total 
