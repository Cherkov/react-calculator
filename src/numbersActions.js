import React, { Component } from 'react';
import Actions from './actions';
import Digit from './digit';
class NumbersActions extends Component {
  state = {
    data:{
      clear: 'C',
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      zero: 0,
      add: '+',
      minus: '-',
      multiply: '*',
      division: '/',
      equal: '='
    }
  }
  action = this.action.bind(this);
  action(act){
  	this.props.action(act);
  }
  render() {
    return (
      <div className="NumbersActions">
        	<div className="digitsContainer">
        		<div className="row">
        			<Actions action = {this.props.action} type={this.state.data.clear}/>
        			<Digit action = {this.props.action} type={this.state.data.zero}/>
                    <Actions action = {this.props.action} type={this.state.data.equal}/>
                </div>
        		<div className="row">
        			<Digit action = {this.props.action} type={this.state.data.seven}/>
        			<Digit action = {this.props.action} type={this.state.data.eight}/>
        			<Digit action = {this.props.action} type={this.state.data.nine}/>
        		</div>
        		<div className="row">
        			<Digit action = {this.props.action} type={this.state.data.four}/>
        			<Digit action = {this.props.action} type={this.state.data.five}/>
        			<Digit action = {this.props.action} type={this.state.data.six}/>
        		</div>
        		<div className="row">
        			<Digit action = {this.props.action} type={this.state.data.one}/>
        			<Digit action = {this.props.action} type={this.state.data.two}/>
        			<Digit action = {this.props.action}  type={this.state.data.three}/>
        		</div>
        	</div>
        	<div className="actionsContainer">
        		<Actions action = {this.props.action} type={this.state.data.add}/>
        		<Actions action = {this.props.action} type={this.state.data.minus}/>
        		<Actions action = {this.props.action} type={this.state.data.multiply}/>
        		<Actions action = {this.props.action} type={this.state.data.division}/>
        	</div>
    </div>
    );
  }
}

export default NumbersActions;
