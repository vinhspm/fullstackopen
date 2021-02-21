import React, { Component } from "react";
import Part from './Part'
class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Part part={this.props.parts[0].name} exercises={this.props.parts[0].exercises}/>
        <Part part={this.props.parts[1].name} exercises={this.props.parts[1].exercises}/>
        <Part part={this.props.parts[2].name} exercises={this.props.parts[2].exercises}/>
      </div>
    );
  }
}

export default Content;

