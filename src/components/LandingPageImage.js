import React, { Component } from 'react';
import FadeUnit from './FadeUnit';
export default class LandingPageImage extends Component {
  render() {
    const show = this.state;
    return(
      <img id="landing-page-image" src="https://i.imgur.com/10ATzaf.jpg"/>
    )
  }
}
