import React, { Component } from 'react';
import OurMission from './components/OurMission'
import OurResources from './components/OurResources'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{margin: 0, padding: 0, width: "100%", maxWidth: "initial"}} className="container">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/mission" component={OurMission} />
            <Route exact path="/resources" component={OurResources} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
