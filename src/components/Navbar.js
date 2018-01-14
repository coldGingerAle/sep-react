import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return(
      <div className="col s12 row">
      <nav className="black">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo"><img id="sepqc-logo" src="https://i.imgur.com/qy6H3GF.png"/></a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mission">Mission</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo" style={{backgroundColor: "black", borderStyle: "solid", borderWidth: "1px"}}>
            <li><Link to="/"><div style={{color: "white"}}>Home</div></Link></li>
            <li><Link to="/mission"><div style={{color: "white"}}>Mission</div></Link></li>
            <li><Link to="/resources"><div style={{color: "white"}}>Resources</div></Link></li>
          </ul>
        </div>
        </nav>
      </div>
    )
  }
}
