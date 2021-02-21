import React, { Component } from 'react'

class Total extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>Number of exercises {this.props.parts[0].exercises + this.props.parts[1].exercises + this.props.parts[2].exercises}</p> 
      </div>
    );
  }
}

export default Total 
