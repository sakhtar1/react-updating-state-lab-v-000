// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{

  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    timesClicked: +1
}

  render(){

    return(
      <div>
       <p>I have {this.state.timesClicked ? null : 'not'} been clicked!</p>
       <button onClick={this.handleClick}>Click me!</button>
     </div>

    )
  }
}
