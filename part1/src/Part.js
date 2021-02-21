import React, { Component } from 'react'

class Part extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>
          {this.props.part} {this.props.exercises}
        </p>
      </div>
    );
  }
}

export default Part 

