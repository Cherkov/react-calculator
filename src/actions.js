import React, { Component } from 'react';
class Actions extends Component {
  action = this.action.bind(this);
  action(act){
  	this.props.action(act);
  }
  render() {
    return (
      <button className={this.props.type === 'C' ? "action equal" : "action"} onClick={() => {this.action(this.props.type)}}>{this.props.type}</button>
    );
  }
}

export default Actions;
