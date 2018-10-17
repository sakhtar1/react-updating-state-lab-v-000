// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      const js = { 
        errors: [], 
        user: null, 
        settings: { 
          bitrate: 8, 
          video: { 
            resolution: '1080p' } 
          } 
    }
   }
  }
  handleClick = () => {
    this.setState({
   settings: Object.assign({}, this.state.settings, {
     bitrate: 12,
   }),
 });

 betaClick = () => {
   this.setState({
  settings: Object.assign({}, this.state.settings.video, {
    resolution: '720p',
  }),
});
  render(){

    return(
      <div>
      <button onClick={this.handleClick}>bitrate</button>
      <button onClick={this.handleClick}>resolution!</button>
      </div>

    )
  }
}
