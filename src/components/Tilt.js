import React, { Component } from 'react';
import Styles from './Styles.js'
import VanillaTilt from 'vanilla-tilt';

class Tilt extends Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      scale: 1.1
    })
  }
  render() {
    return (
      <div
        ref={node => (this.rootNode = node)}
        className="tilt-root"
      >
        <div style={{...Styles.Tilt.OuterContainer}}>
          <div style={{...Styles.Tilt.TextContainer}}>Hello World</div>
        </div>
      </div>
    );
  }
}

export default Tilt;
