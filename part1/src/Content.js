import React, { Component } from "react";
import Part from './Part'
class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Part part={this.props.part1} exercises={this.props.exercises1}/>
        <Part part={this.props.part2} exercises={this.props.exercises2}/>
        <Part part={this.props.part3} exercises={this.props.exercises3}/>
      </div>
    );
  }
}

export default Content;

