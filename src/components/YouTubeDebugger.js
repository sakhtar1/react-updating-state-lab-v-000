// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      js { 
        errors: [], 
        user: null, 
        settings: { 
          bitrate: 8, 
          video: { 
            resolution: '1080p' } 
          } 
    };
  }
  render(){

    return(
      <div>
      <button onClick={this.handleClick}>bitrate</button>
      <button onClick={this.handleClick}>resolution!</button>
      </div>

    )
  }
}
