import React, { Component } from 'react';
class Digit extends Component {
  action = this.action.bind(this);
  action(act){
  	this.props.action(act);
  }
  render() {
    return (
      <button className="digit" onClick={() => {this.action(this.props.type)}}>
      	{this.props.type}
      </button>
    );
  }
}

export default Digit;
