import React, { Component } from 'react';
import './App.css';
import SEPIntro from './components/SEPIntro'
import FadeUnit from './components/FadeUnit'
import LandingPageImage from './components/LandingPageImage'

class App extends Component {
  render() {
    return (
      <div style={{margin: 0, padding: 0, width: "100%", maxWidth: "initial"}} className="container">
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

export default App;