import React, { Component } from 'react';
import Display from './display';
import NumbersActions from './numbersActions';
import logo from './logo.svg';
import './App.css';
var action;
class App extends Component {
  state = {
    result: '',
  }
  buttonAction = this.buttonAction.bind(this);
  buttonAction(act){
    if(act != 'C'){
      if(
          (typeof(act) != 'string' && typeof(action) != 'string') || 
          (act == '-' && action == undefined) ||
          (action == '-' && typeof(act) == 'number') ||
          (typeof(act) == 'string' && typeof(action) == 'number') ||
          (action === '=' && act != '=') || 
          (action == '=' && typeof(act) == 'number') ||
          (typeof(action) == 'string' && typeof(act) == 'number')
        )
        this.setState({
          result: act != '=' ? (this.state.result + act): eval(this.state.result)
        })
    }
    else{
      this.setState({result: ''})
    }
    action = act
    console.log(action)
  }
  render() {
    return (
      <div className="App">
        <Display result={this.state.result}/>
        <NumbersActions action={this.buttonAction}/>
      </div>
    );
  }
}

export default App;
