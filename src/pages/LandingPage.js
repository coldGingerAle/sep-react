import React, { Component } from 'react';
import SEPIntro from '.././components/SEPIntro';
import LandingPageImage from '.././components/LandingPageImage';

export default class LandingPage extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
        <div className="col s12 m6 l6">
          <LandingPageImage />
        </div>
        <div id="SEP-intro" className="col s12 m6 l6">
          <SEPIntro />
        </div>
        </div>
      </div>
    )
  }
}
