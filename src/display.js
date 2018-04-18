import React, { Component } from 'react';
class Display extends Component {
  render() {
    return (
      <div className="Display">
      	<span>
      	{this.props.result}
      	</span>
      </div>
    );
  }
}

export default Display;
